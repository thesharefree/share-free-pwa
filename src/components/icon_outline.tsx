import * as HIcons from '@heroicons/react/outline';

const DynamicHeroIcon = (props: any) => {
    const { icon, className, onClick, ...otherProps } = props;
    const { ...icons } = HIcons;
    const TheIcon = icons[icon] ?? icons['FolderIcon'];

    return <TheIcon className={className ?? 'h-4 w-auto'} {...{ onClick }} {...otherProps} title={icon} />;
};

export default DynamicHeroIcon;
