import { EComponentKind, T4DComponentConfig, IExostiveElementProps } from '@ws-ui/webform-editor';
import {
  Settings,
  isDatasourcePayload,
  getDataTransferSourceID,
  isAttributePayload,
} from '@ws-ui/webform-editor';
import {
  isArrayDatasource,
  isEntityDatasource,
  isEntitySelectionDatasource,
  isObjectDatasource,
  isRelatedEntitiesAttribute,
  isRelatedEntityAttribute,
} from '@ws-ui/shared';

import AvatarGroupSettings, { BasicSettings } from './AvatarGroup.settings';
import { RxAvatar } from 'react-icons/rx';

export default {
  craft: {
    displayName: 'Avatar Group',
    rules: {
      canDrag: () => true,
    },

    kind: EComponentKind.BASIC,
    props: {
      name: '',
      classNames: [],
      events: [],
    },
    related: {
      settings: Settings(AvatarGroupSettings, BasicSettings),
    },
  },
  info: {
    displayName: 'Avatar Group',
    exposed: true,
    icon: RxAvatar,
    events: [
      {
        label: 'On Click',
        value: 'onclick',
      },
      {
        label: 'On Blur',
        value: 'onblur',
      },
      {
        label: 'On Focus',
        value: 'onfocus',
      },
      {
        label: 'On MouseEnter',
        value: 'onmouseenter',
      },
      {
        label: 'On MouseLeave',
        value: 'onmouseleave',
      },
      {
        label: 'On KeyDown',
        value: 'onkeydown',
      },
      {
        label: 'On KeyUp',
        value: 'onkeyup',
      },
    ],
    datasources: {
      set: (nodeId, _query, payload) => {
        const new_props: Partial<IExostiveElementProps> = {};
        payload.forEach((item) => {
          if (isDatasourcePayload(item)) {
            if (isEntitySelectionDatasource(item.source) || isArrayDatasource(item.source)) {
              new_props.datasource = getDataTransferSourceID(item);
            }
            if (isEntityDatasource(item.source) || isObjectDatasource(item.source)) {
              new_props.currentElement = getDataTransferSourceID(item);
            }
          } else if (isAttributePayload(item)) {
            if (isRelatedEntitiesAttribute(item.attribute)) {
              new_props.datasource = getDataTransferSourceID(item);
            } else if (isRelatedEntityAttribute(item.attribute)) {
              new_props.currentElement = getDataTransferSourceID(item);
            }
          }
        });
        return {
          [nodeId]: new_props,
        };
      },
    },
  },
  defaultProps: {
    maxLength: 3,
  },
} as T4DComponentConfig<IAvatarGroupProps>;

export interface IAvatarGroupProps extends webforms.ComponentProps {
  maxLength?: number;
  image?: Text;
  title?: Text;
}
