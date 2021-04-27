import $ from 'jquery';
// import BpmnModeler from 'bpmn-js/lib/Modeler';
import BpmnModeler from './custom-modeler';
import diagramXML from '../resources/default.bpmn';

import resizeAllModule from './resize-all-rules';
import OriginModule from 'diagram-js-origin';

import bpmnExtension from '../resources/model-extension.json';

var modeler = new BpmnModeler({
  container: '#canvas',
  keyboard: {bindTo: document},

  moddleExtensions: {
    bpmnext: bpmnExtension
  },

  // customize default colors
  bpmnRenderer: {
    defaultFillColor: 'none',
    defaultStrokeColor: 'rgb(255 100 0)' // orange 
    // defaultStrokeColor: 'rgb(255 255 0)' // yellow
  },
 
  // customize text
  // textRenderer: {
  //   defaultStyle: {
  //     fontSize: '14px',
  //     fontWeight: 'bold',
  //   },
  //   externalStyle: {
  //     fontSize: '14px',
  //     fontWeight: 'bold',
  //   }
  // },

  additionalModules: [
    OriginModule,
    resizeAllModule,
  ],
});

var container = $('#js-drop-zone');

var sizeSlider = document.getElementById("bg-width");
var sizeVal = document.getElementById("bg-width-val");

function updateBackgroundSize(bgSize) {
    sizeVal.innerHTML = bgSize;
    sizeSlider.value = bgSize;
    // console.log(`New slider value: ${this.value}`);
    var canvas = document.getElementById("canvas");
    canvas.style.backgroundSize = `${bgSize}px`;
}


sizeVal.innerHTML = sizeSlider.value;
sizeSlider.oninput = function() {
	updateBackgroundSize(this.value);
}

function createNewDiagram() {
    openDiagram(diagramXML);
    localStorage.removeItem("b");
}

async function openDiagram(xml) {
    var bgSizeRegex = /"backgroundSize":(\d+)/
    var match = bgSizeRegex.exec(xml);
    if (match !== null && match.length >= 2) {
        var bgSize = match[1];
        // console.log(`Parsed backgroundSize=${bgSize}`);
        updateBackgroundSize(bgSize);
    }

    try {
        await modeler.importXML(xml);
        container
          .removeClass('with-error')
          .addClass('with-diagram');
    } catch (err) {
        container
          .removeClass('with-diagram')
          .addClass('with-error');

        container.find('.error pre').text(err.message);
        console.error(err);
    }
}

function registerFileDrop(container, callback) {

  function handleFileSelect(e) {
    e.stopPropagation();
    e.preventDefault();

    var files = e.dataTransfer.files;
    var file = files[0];
    var reader = new FileReader();

    reader.onload = function(e) {
      var xml = e.target.result;
      callback(xml);
    };

    reader.readAsText(file);
  }

  function handleDragOver(e) {
    e.stopPropagation();
    e.preventDefault();
    e.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
  }

  container.get(0).addEventListener('dragover', handleDragOver, false);
  container.get(0).addEventListener('drop', handleFileSelect, false);
}

// file drag / drop ///////////////////////

// check file api availability
if (!window.FileList || !window.FileReader) {
  window.alert(
    'Looks like you use an older browser that does not support drag and drop. ' +
    'Try using Chrome, Firefox or the Internet Explorer > 10.');
} else {
  registerFileDrop(container, openDiagram);
}

// bootstrap diagram functions
$(function() {

  $('#js-create-diagram').click(function(e) {
    e.stopPropagation();
    e.preventDefault();

    createNewDiagram();
  });

  var downloadLink = $('#js-download-diagram');

  $('.buttons a').click(function(e) {
    if (!$(this).is('.active')) {
      e.preventDefault();
      e.stopPropagation();
    }
  });

  function setEncoded(link, name, data) {
    var encodedData = encodeURIComponent(data);

    if (data) {
      link.addClass('active').attr({
        'href': 'data:application/bpmn20-xml;charset=UTF-8,' + encodedData,
        'download': name
      });
    } else {
      link.removeClass('active');
    }
  }

  var exportArtifacts = debounce(async function() {
    try {
      var { xml } = await modeler.saveXML({ format: true });
      xml = addMetaLine(xml);
      var fname = getBackgroundImageName()
      setEncoded(downloadLink, `${fname}.bpmn`, xml);
    } catch (err) {
      console.error('Error happened saving XML: ', err);
      setEncoded(downloadLink, 'diagram.bpmn', null);
    }
  }, 500);

  modeler.on('commandStack.changed', exportArtifacts);
});

// helpers //////////////////////

function debounce(fn, timeout) {

  var timer;

  return function() {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(fn, timeout);
  };
}


function changeBackgroundImage(imgPath) {
    var canvas = document.getElementById("canvas");
    var imgUrl = "url('" + imgPath + "')";
    var bgSize = sizeSlider.value;
    // console.log(`Changing bg image (size=${bgSize})`);
    canvas.style.backgroundImage = imgUrl;
    canvas.style.backgroundSize = `${bgSize}px`;
    canvas.style.backgroundRepeat = 'no-repeat';
    canvas.style.backgroundPosition= `top 0px left 0px`;
}

$(switchBackground);

function switchBackground() {
  var backgroundImage = localStorage.getItem('b');
  if (backgroundImage) {
      changeBackgroundImage(backgroundImage);
  }
}

var imgReader = new FileReader();
var rFilter = /^(?:image\/bmp|image\/cis\-cod|image\/gif|image\/ief|image\/jpeg|image\/jpeg|image\/jpeg|image\/pipeg|image\/png|image\/svg\+xml|image\/tiff|image\/x\-cmu\-raster|image\/x\-cmx|image\/x\-icon|image\/x\-portable\-anymap|image\/x\-portable\-bitmap|image\/x\-portable\-graymap|image\/x\-portable\-pixmap|image\/x\-rgb|image\/x\-xbitmap|image\/x\-xpixmap|image\/x\-xwindowdump)$/i;

imgReader.onload = function(oFREvent) {
    try {
        localStorage.setItem('b', oFREvent.target.result);
        switchBackground();
    }
    catch(err) {
        alert("Background image is too large for local storage (try to make it smaller before uploading). Error Message: " + err.message);
    }
};

function loadImageFile(testEl) {
  if (! testEl.files.length) { return; }
  var oFile = testEl.files[0];
  if (!rFilter.test(oFile.type)) { alert("You must select a valid image file!"); return; }
  imgReader.readAsDataURL(oFile);
}

var bgImg = document.getElementById("background-image");
bgImg.onchange = function() {
    loadImageFile(this);
}

var xmlReader = new FileReader();
const xmlFilter = /^(?:application\/bpmn20-xml|application\/xml)$/i;
const prefix = "data:application/octet-stream;base64,";

xmlReader.onload = function(oFREvent) {
    try {
        var xmlStream = oFREvent.target.result;
        var xmlBase64 = xmlStream.substr(prefix.length)
        var xml = atob(xmlBase64);
        openDiagram(xml);
    }
    catch(err) {
        alert("Reading XML failed: " + err.message);
    }
};

function loadXmlFile(testEl) {
  if (! testEl.files.length) { return; }
  var oFile = testEl.files[0];
  xmlReader.readAsDataURL(oFile);
}

var bpmnXml = document.getElementById("bpmn-xml");
bpmnXml.onchange = function() {
    loadXmlFile(this);
}

function imageMetadata() {
    return {"backgroundSize": parseInt(sizeSlider.value)}
}

function getBackgroundImageName() {
    var files = document.getElementById("background-image").files
    if (! files.length) { return "diagram"; }
    var fname = files[0].name
    // strip extension
    return fname.split('.').slice(0, -1).join('.')
}

function addMetaLine(fileContent) {
	var meta = JSON.stringify(imageMetadata());
	var i = fileContent.indexOf("\n");
	return fileContent.substr(0, i) + `\n<!-- ${meta} -->` + fileContent.substr(i)
}

// shift background image with diagram //////////////////////

function shiftBgPosViewport(element) {
    // e.g. "matrix(1,0,0,1,44,56)"
    var matrix = element.getAttribute("transform");
    var res = matrix.match(/,(-?\d+),(-?\d+)\)/);
    if (res !== null) {
        var x = parseInt(res[1]);
        var y = parseInt(res[2]);
        var bgPositionNew = `top ${y}px left ${x}px`;
        // console.log(`Changing background position to ${bgPositionNew}`);
        var canvas = document.getElementById("canvas");
        canvas.style.backgroundPosition = bgPositionNew;
    }
}

// the following logic changes the backgroundPosition top/left position accordingly if the SVG canvas is moved around
// https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver
const targetNode = document.getElementsByClassName("viewport")[0];
const config = { attributes: true, childList: false, subtree: false };
const callback = function(mutationsList, observer) {
    for(const mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === "transform") {
            shiftBgPosViewport(mutation.target);
        }
    }
};
const observer = new MutationObserver(callback);
observer.observe(targetNode, config);
