import config, { IAvatarGroupProps } from './AvatarGroup.config';
import { T4DComponent, useEnhancedEditor } from '@ws-ui/webform-editor';
import Build from './AvatarGroup.build';
import Render from './AvatarGroup.render';

const AvatarGroup: T4DComponent<IAvatarGroupProps> = (props) => {
  const { enabled } = useEnhancedEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return enabled ? <Build {...props} /> : <Render {...props} />;
};

AvatarGroup.craft = config.craft;
AvatarGroup.info = config.info;
AvatarGroup.defaultProps = config.defaultProps;

export default AvatarGroup;
