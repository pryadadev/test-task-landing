import { useDynamicSvgImport } from "@hooks/useDynamicSvgImport.js";

const SvgIcon = (props) => {
  const { iconName, svgStyle } = props;
  const { loading, SvgIcon } = useDynamicSvgImport(iconName);

  return (
    <>
      {loading && (
        <div className="svg-icon__loader"></div>
      )}
      {SvgIcon && (
        <SvgIcon className={svgStyle} />
      )}
    </>
  );
};

export default SvgIcon;
