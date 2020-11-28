import { is } from 'bpmn-js/lib/util/ModelUtil';

import { isExpanded } from 'bpmn-js/lib/util/DiUtil';

// import { getParticipantResizeConstraints } from 'bpmn-js/lib/features/modeling/behavior/util/ResizeUtil';

var HIGH_PRIORITY = 1500;

export var LANE_MIN_DIMENSIONS = { width: 30, height: 20 };

export var PARTICIPANT_MIN_DIMENSIONS = { width: 30, height: 20 };

export var SUB_PROCESS_MIN_DIMENSIONS = { width: 140, height: 120 };

export var TEXT_ANNOTATION_MIN_DIMENSIONS = { width: 20, height: 10 };


/**
 * Set minimum bounds/resize constraints on resize.
 *
 * @param {EventBus} eventBus
 */
export default function ResizeBehavior(eventBus) {
  eventBus.on('resize.start', HIGH_PRIORITY, function(event) {
    var context = event.context,
        shape = context.shape,
        direction = context.direction,
        balanced = context.balanced;

    // if (is(shape, 'bpmn:Lane') || is(shape, 'bpmn:Participant')) {
    //   context.resizeConstraints = getParticipantResizeConstraints(shape, direction, balanced);
    // }

    if (is(shape, 'bpmn:Participant')) {
      context.minDimensions = PARTICIPANT_MIN_DIMENSIONS;
    }

    if (is(shape, 'bpmn:SubProcess') && isExpanded(shape)) {
      context.minDimensions = SUB_PROCESS_MIN_DIMENSIONS;
    }

    if (is(shape, 'bpmn:TextAnnotation')) {
      context.minDimensions = TEXT_ANNOTATION_MIN_DIMENSIONS;
    }
  });
}

ResizeBehavior.$inject = [ 'eventBus' ];
