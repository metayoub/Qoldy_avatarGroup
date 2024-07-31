import { useRenderer, useSources } from '@ws-ui/webform-editor';
import cn from 'classnames';
import { FC, useEffect, useState, useMemo, useCallback, CSSProperties } from 'react';
import { IAvatarGroupProps } from './AvatarGroup.config';
import { DataLoader } from '@ws-ui/webform-editor';

const AvatarGroup: FC<IAvatarGroupProps> = ({
  maxLength = 3,
  image = '',
  title = '',
  style,
  className,
  classNames = [],
}) => {
  const { connect } = useRenderer();
  const [data, setData] = useState<datasources.IEntity[]>(() => []);
  const [length, setLength] = useState(() => 0);
  const {
    sources: { datasource: ds },
  } = useSources();

  const loader = useMemo<DataLoader | null>(() => {
    if (!ds) {
      return null;
    }
    return DataLoader.create(ds, [image as string, title as string]);
  }, [image, title, ds]);

  const updateFromLoader = useCallback(() => {
    if (!loader) {
      return;
    }
    setData(loader.page);
    setLength(loader.length);
  }, [loader]);

  useEffect(() => {
    if (!loader || !ds) {
      return;
    }
    loader.sourceHasChanged().then(updateFromLoader);
  }, []);

  // calculate the marginRight
  const avatarStyle: CSSProperties = {
    marginRight: style?.marginRight || '-40px',
    borderWidth: style?.borderWidth || '3px',
    borderColor: style?.borderColor || 'white',
    borderStyle: style?.borderStyle || 'solid',
    marginLeft: style?.marginLeft || '0px',
    display: style?.display || 'flex',
    justifyContent: style?.justifyContent || 'center',
    alignItems: style?.alignItems || 'center',
    width: style?.width || style?.height || '100px',
    height: style?.height || style?.width || '100px',
    borderRadius: style?.borderRadius || '50%',
    backgroundColor: style?.backgroundColor || '#E6EAF4',
    color: style?.color || '#767B87',
    fontSize: style?.fontSize || '24px',
  };

  const getInitials = (name: string) => {
    const words = name.split(' ');
    if (words.length > 2) {
      const haveMiddleName = words
        .map((word) => word.charAt(0).toUpperCase())
        .join('')
        .substring(0, 4);
      const resultInitialName = haveMiddleName.split('');
      return `${resultInitialName[0]}${resultInitialName[resultInitialName.length - 1]}`;
    }
    return words
      .map((word) => word.charAt(0).toUpperCase())
      .join('')
      .substring(0, 2);
  };

  const renderAvatars = () => {
    const remainingCount = length - maxLength;
    const avatarsToRender = data.slice(0, maxLength);
    const avatars = avatarsToRender.map((entity, index) => {
      const initials =
        entity[title as keyof typeof entity] &&
        getInitials(entity[title as keyof typeof entity] as string);
      let imageObjec = entity[image as keyof typeof entity] as any;

      return (
        <div key={`avatar-${index}`} className="inline-block" data-testid="avatar-initial">
          {imageObjec?.__deferred?.image ? (
            <div
              style={{
                ...avatarStyle,
                backgroundImage: `url(${imageObjec?.__deferred?.uri})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: 'transparent',
              }}
              data-testid="avatar-initial-text"
            >
              {initials}
            </div>
          ) : (
            <div style={avatarStyle} data-testid="avatar-initial-text">
              {initials}
            </div>
          )}
        </div>
      );
    });

    if (remainingCount > 0) {
      avatars.push(
        <div key="avatar-remaining" data-testid="avatar-initial-text" className="inline-block">
          <div data-testid="avatar-initial-item" style={avatarStyle}>
            +{remainingCount}
          </div>
        </div>,
      );
    }

    return avatars;
  };

  return (
    <div ref={connect} className={cn(className, classNames)}>
      {renderAvatars()}
    </div>
  );
};

export default AvatarGroup;
