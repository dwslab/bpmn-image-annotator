// import BehaviorModule from 'bpmn-js/lib/features/modeling/behavior';
import BehaviorModule from '../custom-modeling-behavior';
// import RulesModule from 'bpmn-js/lib/features/rules';
import RulesModule from '../features/rules';
import DiOrderingModule from 'bpmn-js/lib/features/di-ordering';
import OrderingModule from 'bpmn-js/lib/features/ordering';
import ReplaceModule from 'bpmn-js/lib/features/replace';

import CommandModule from 'diagram-js/lib/command';
import TooltipsModule from 'diagram-js/lib/features/tooltips';
import LabelSupportModule from 'diagram-js/lib/features/label-support';
import AttachSupportModule from 'diagram-js/lib/features/attach-support';
import SelectionModule from 'diagram-js/lib/features/selection';
import ChangeSupportModule from 'diagram-js/lib/features/change-support';
import SpaceToolModule from 'diagram-js/lib/features/space-tool';

import BpmnFactory from 'bpmn-js/lib/features/modeling/BpmnFactory';
import BpmnUpdater from 'bpmn-js/lib/features/modeling/BpmnUpdater';
import ElementFactory from 'bpmn-js/lib/features/modeling/ElementFactory';
import Modeling from 'bpmn-js/lib/features/modeling/Modeling';
import BpmnLayouter from 'bpmn-js/lib/features/modeling/BpmnLayouter';
import CroppingConnectionDocking from 'diagram-js/lib/layout/CroppingConnectionDocking';


export default {
  __init__: [
    'modeling',
    'bpmnUpdater'
  ],
  __depends__: [
    BehaviorModule,
    RulesModule,
    DiOrderingModule,
    OrderingModule,
    ReplaceModule,
    CommandModule,
    TooltipsModule,
    LabelSupportModule,
    AttachSupportModule,
    SelectionModule,
    ChangeSupportModule,
    SpaceToolModule
  ],
  bpmnFactory: [ 'type', BpmnFactory ],
  bpmnUpdater: [ 'type', BpmnUpdater ],
  elementFactory: [ 'type', ElementFactory ],
  modeling: [ 'type', Modeling ],
  layouter: [ 'type', BpmnLayouter ],
  connectionDocking: [ 'type', CroppingConnectionDocking ]
};
