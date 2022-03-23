const WarningList = {
  styleUnsupported:
    "You have passed a style to FlashList. This list doesn't support styling, use contentContainerStyle or wrap the list in a parent and apply style to it instead.",
  styleContentContainerUnsupported:
    "FlashList only supports padding related props and backgroundColor in contentContainerStyle." +
    " Please remove other values as they're not used. In case of vertical lists horizontal padding is ignored and vice versa, if you need it apply padding to your items instead.",
  styleUnsupportedPaddingType:
    "FlashList will ignore horizontal padding in case of vertical lists and vertical padding if the list is horizontal. If you need to have it apply relevant padding to your items instead.",
  unusableRenderedSize:
    "FlashList's rendered size is not usable. Either the height or width is too small (<2px). " +
    "Please make sure that the parent view of the list has a valid size. FlashList will match the size of the parent.",
  missingKeyExtractor:
    "FlashList requires a keyExtractor prop to be defined when animating elements. Without it, the animations will not run as expected.",
};
export default WarningList;
