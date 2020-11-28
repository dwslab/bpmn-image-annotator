import AdaptiveLabelPositioningBehavior from 'bpmn-js/lib/features/modeling/behavior/AdaptiveLabelPositioningBehavior';
import AppendBehavior from 'bpmn-js/lib/features/modeling/behavior/AppendBehavior';
import AssociationBehavior from 'bpmn-js/lib/features/modeling/behavior/AssociationBehavior';
import AttachEventBehavior from 'bpmn-js/lib/features/modeling/behavior/AttachEventBehavior';
import BoundaryEventBehavior from 'bpmn-js/lib/features/modeling/behavior/BoundaryEventBehavior';
import RootElementReferenceBehavior from 'bpmn-js/lib/features/modeling/behavior/RootElementReferenceBehavior';
import CreateBehavior from 'bpmn-js/lib/features/modeling/behavior/CreateBehavior';
import FixHoverBehavior from 'bpmn-js/lib/features/modeling/behavior/FixHoverBehavior';
import CreateDataObjectBehavior from 'bpmn-js/lib/features/modeling/behavior/CreateDataObjectBehavior';
import CreateParticipantBehavior from 'bpmn-js/lib/features/modeling/behavior/CreateParticipantBehavior';
import DataInputAssociationBehavior from 'bpmn-js/lib/features/modeling/behavior/DataInputAssociationBehavior';
import DataStoreBehavior from 'bpmn-js/lib/features/modeling/behavior/DataStoreBehavior';
import DeleteLaneBehavior from 'bpmn-js/lib/features/modeling/behavior/DeleteLaneBehavior';
import DetachEventBehavior from 'bpmn-js/lib/features/modeling/behavior/DetachEventBehavior';
import DropOnFlowBehavior from 'bpmn-js/lib/features/modeling/behavior/DropOnFlowBehavior';
import EventBasedGatewayBehavior from 'bpmn-js/lib/features/modeling/behavior/EventBasedGatewayBehavior';
import GroupBehavior from 'bpmn-js/lib/features/modeling/behavior/GroupBehavior';
import ImportDockingFix from 'bpmn-js/lib/features/modeling/behavior/ImportDockingFix';
import IsHorizontalFix from 'bpmn-js/lib/features/modeling/behavior/IsHorizontalFix';
import LabelBehavior from 'bpmn-js/lib/features/modeling/behavior/LabelBehavior';
import ModelingFeedback from 'bpmn-js/lib/features/modeling/behavior/ModelingFeedback';
import ReplaceConnectionBehavior from 'bpmn-js/lib/features/modeling/behavior/ReplaceConnectionBehavior';
import RemoveParticipantBehavior from 'bpmn-js/lib/features/modeling/behavior/RemoveParticipantBehavior';
import ReplaceElementBehaviour from 'bpmn-js/lib/features/modeling/behavior/ReplaceElementBehaviour';
// import ResizeBehavior from 'bpmn-js/lib/features/modeling/behavior/ResizeBehavior';
import ResizeBehavior from './ResizeBehavior';
import ResizeLaneBehavior from 'bpmn-js/lib/features/modeling/behavior/ResizeLaneBehavior';
import RemoveElementBehavior from 'bpmn-js/lib/features/modeling/behavior/RemoveElementBehavior';
import SpaceToolBehavior from 'bpmn-js/lib/features/modeling/behavior/SpaceToolBehavior';
import SubProcessStartEventBehavior from 'bpmn-js/lib/features/modeling/behavior/SubProcessStartEventBehavior';
import ToggleElementCollapseBehaviour from 'bpmn-js/lib/features/modeling/behavior/ToggleElementCollapseBehaviour';
import UnclaimIdBehavior from 'bpmn-js/lib/features/modeling/behavior/UnclaimIdBehavior';
import UpdateFlowNodeRefsBehavior from 'bpmn-js/lib/features/modeling/behavior/UpdateFlowNodeRefsBehavior';
import UnsetDefaultFlowBehavior from 'bpmn-js/lib/features/modeling/behavior/UnsetDefaultFlowBehavior';

export default {
  __init__: [
    'adaptiveLabelPositioningBehavior',
    'appendBehavior',
    'associationBehavior',
    'attachEventBehavior',
    'boundaryEventBehavior',
    'rootElementReferenceBehavior',
    'createBehavior',
    'fixHoverBehavior',
    'createDataObjectBehavior',
    'createParticipantBehavior',
    'dataStoreBehavior',
    'dataInputAssociationBehavior',
    'deleteLaneBehavior',
    'detachEventBehavior',
    'dropOnFlowBehavior',
    'eventBasedGatewayBehavior',
    'groupBehavior',
    'importDockingFix',
    'isHorizontalFix',
    'labelBehavior',
    'modelingFeedback',
    'removeElementBehavior',
    'removeParticipantBehavior',
    'replaceConnectionBehavior',
    'replaceElementBehaviour',
    'resizeBehavior',
    'resizeLaneBehavior',
    'toggleElementCollapseBehaviour',
    'spaceToolBehavior',
    'subProcessStartEventBehavior',
    'unclaimIdBehavior',
    'unsetDefaultFlowBehavior',
    'updateFlowNodeRefsBehavior'
  ],
  adaptiveLabelPositioningBehavior: [ 'type', AdaptiveLabelPositioningBehavior ],
  appendBehavior: [ 'type', AppendBehavior ],
  associationBehavior: [ 'type', AssociationBehavior ],
  attachEventBehavior: [ 'type', AttachEventBehavior ],
  boundaryEventBehavior: [ 'type', BoundaryEventBehavior ],
  rootElementReferenceBehavior: [ 'type', RootElementReferenceBehavior ],
  createBehavior: [ 'type', CreateBehavior ],
  fixHoverBehavior: [ 'type', FixHoverBehavior ],
  createDataObjectBehavior: [ 'type', CreateDataObjectBehavior ],
  createParticipantBehavior: [ 'type', CreateParticipantBehavior ],
  dataInputAssociationBehavior: [ 'type', DataInputAssociationBehavior ],
  dataStoreBehavior: [ 'type', DataStoreBehavior ],
  deleteLaneBehavior: [ 'type', DeleteLaneBehavior ],
  detachEventBehavior: [ 'type', DetachEventBehavior ],
  dropOnFlowBehavior: [ 'type', DropOnFlowBehavior ],
  eventBasedGatewayBehavior: [ 'type', EventBasedGatewayBehavior ],
  groupBehavior: [ 'type', GroupBehavior ],
  importDockingFix: [ 'type', ImportDockingFix ],
  isHorizontalFix: [ 'type', IsHorizontalFix ],
  labelBehavior: [ 'type', LabelBehavior ],
  modelingFeedback: [ 'type', ModelingFeedback ],
  replaceConnectionBehavior: [ 'type', ReplaceConnectionBehavior ],
  removeParticipantBehavior: [ 'type', RemoveParticipantBehavior ],
  replaceElementBehaviour: [ 'type', ReplaceElementBehaviour ],
  resizeBehavior: [ 'type', ResizeBehavior ],
  resizeLaneBehavior: [ 'type', ResizeLaneBehavior ],
  removeElementBehavior: [ 'type', RemoveElementBehavior ],
  toggleElementCollapseBehaviour : [ 'type', ToggleElementCollapseBehaviour ],
  spaceToolBehavior: [ 'type', SpaceToolBehavior ],
  subProcessStartEventBehavior: [ 'type', SubProcessStartEventBehavior ],
  unclaimIdBehavior: [ 'type', UnclaimIdBehavior ],
  updateFlowNodeRefsBehavior: [ 'type', UpdateFlowNodeRefsBehavior ],
  unsetDefaultFlowBehavior: [ 'type', UnsetDefaultFlowBehavior ]
};
