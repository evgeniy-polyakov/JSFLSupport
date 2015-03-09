/***************************************************************************
 * JSFL API
 * Flash documents
 **************************************************************************/
/**
 * @since Flash MX 2004
 * @class {Document}
 */
Document = function () {
};
/**
 * @since Flash MX 2004
 * @type {String}
 */
Document.prototype.accName = null;
/**
 * @since Flash CS3
 * @type {Boolean}
 */
Document.prototype.as3AutoDeclare = false;
/**
 * @since Flash CS3
 * @type {String}
 */
Document.prototype.as3Dialect = null;
/**
 * @since Flash CS3
 * @type {Number}
 */
Document.prototype.as3ExportFrame = 0;
/**
 * @since Flash CS3
 * @type {Boolean}
 */
Document.prototype.as3StrictMode = false;
/**
 * @since Flash CS3
 * @type {Boolean}
 */
Document.prototype.as3WarningsMode = false;
/**
 * @since Flash CS3
 * @type {Number}
 */
Document.prototype.asVersion = 0;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Document.prototype.autoLabel = false;
/**
 * @since Flash MX 2004
 * @type {String|Number}
 */
Document.prototype.backgroundColor = null;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Document.prototype.currentPublishProfile = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Document.prototype.currentTimeline = 0;
/**
 * @since Flash MX 2004
 * @type {String}
 */
Document.prototype.description = null;
/**
 * @since Flash CS3
 * @type {String}
 */
Document.prototype.docClass = null;
/**
 * @since Flash CS4
 * @type {String}
 */
Document.prototype.externalLibraryPath = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Document.prototype.forceSimple = false;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Document.prototype.frameRate = 0;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Document.prototype.height = 0;
/**
 * @since Flash CS3
 * @type {Number}
 * @const
 */
Document.prototype.id = 0;
/**
 * @since Flash MX 2004
 * @type {Library}
 * @const
 */
Document.prototype.library = null;
/**
 * @since Flash CS4
 * @type {String}
 */
Document.prototype.libraryPath = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Document.prototype.livePreview = false;
/**
 * @since Flash MX 2004
 * @type {String}
 * @const
 */
Document.prototype.name = null;
/**
 * @since Flash MX 2004
 * @type {String}
 * @const
 */
Document.prototype.path = null;
/**
 * @since Flash CS4
 * @type {String}
 * @const
 */
Document.prototype.pathURI = null;
/**
 * @since Flash MX 2004
 * @type {Array.<String>}
 * @const
 */
Document.prototype.publishProfiles = null;
/**
 * @since Flash MX 2004
 * @deprecated
 * @type {ScreenOutline}
 * @const
 */
Document.prototype.screenOutline = null;
/**
 * @since Flash MX 2004
 * @type {Array.<Element>}
 */
Document.prototype.selection = null;
/**
 * @since Flash MX 2004
 * @type {Boolean}
 */
Document.prototype.silent = false;
/**
 * @since Flash CS4
 * @type {String}
 */
Document.prototype.sourcePath = null;
/**
 * @since Flash CS6
 * @type {Number}
 */
Document.prototype.swfJPEGQuality = null;
/**
 * @since Flash MX 2004
 * @type {Array.<Timeline>}
 * @const
 */
Document.prototype.timelines = null;
/**
 * @since Flash MX 2004
 * @type {Matrix}
 * @const
 */
Document.prototype.viewMatrix = null;
/**
 * @since Flash MX 2004
 * @type {Number}
 */
Document.prototype.width = 0;
/**
 * @since Flash 8
 * @type {Number}
 */
Document.prototype.zoomFactor = 0;
/**
 * @since Flash MX 2004
 * @param {String} name
 * @param {String} type
 * @param {Object} data
 */
Document.prototype.addDataToDocument = function (name, type, data) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @param {String} type
 * @param {Object} data
 */
Document.prototype.addDataToSelection = function (name, type, data) {
};
/**
 * @since Flash 8
 * @param {String} filterName
 */
Document.prototype.addFilter = function (filterName) {
};
/**
 * @since Flash MX 2004
 * @param {{x:Number,y:Number}} position
 * @param {Item} item
 * @return {Boolean}
 */
Document.prototype.addItem = function (position, item) {
};
/**
 * @since Flash MX 2004
 * @param {{x:Number,y:Number}} startPoint
 * @param {{x:Number,y:Number}} endpoint
 */
Document.prototype.addNewLine = function (startPoint, endpoint) {
};
/**
 * @since Flash MX 2004
 * @param {{left:Number,top:Number,right:Number,bottom:Number}} boundingRectangle
 * @param {Boolean} [bSuppressFill]
 * @param {Boolean} [bSuppressStroke]
 */
Document.prototype.addNewOval = function (boundingRectangle, bSuppressFill, bSuppressStroke) {
};
/**
 * @since Flash CS4
 * @param {{left:Number,top:Number,right:Number,bottom:Number}} boundingRectangle
 * @param {Boolean} [bSuppressFill]
 * @param {Boolean} [bSuppressStroke]
 */
Document.prototype.addNewPrimitiveOval = function (boundingRectangle, bSuppressFill, bSuppressStroke) {
};
/**
 * @since Flash CS4
 * @param {{left:Number,top:Number,right:Number,bottom:Number}} boundingRectangle
 * @param {Number} roundness
 * @param {Boolean} [bSuppressFill]
 * @param {Boolean} [bSuppressStroke]
 */
Document.prototype.addNewPrimitiveRectangle = function (boundingRectangle, roundness, bSuppressFill, bSuppressStroke) {
};
/**
 * @since Flash MX 2004
 * @param {String} profileName
 * @return {Number}
 */
Document.prototype.addNewPublishProfile = function (profileName) {
};
/**
 * @since Flash MX 2004
 * @param {{left:Number,top:Number,right:Number,bottom:Number}} boundingRectangle
 * @param {Number} roundness
 * @param {Boolean} [bSuppressFill]
 * @param {Boolean} [bSuppressStroke]
 */
Document.prototype.addNewRectangle = function (boundingRectangle, roundness, bSuppressFill, bSuppressStroke) {
};
/**
 * @since Flash MX 2004
 * @param {String} [name]
 * @return {Boolean}
 */
Document.prototype.addNewScene = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {{left:Number,top:Number,right:Number,bottom:Number}} boundingRectangle
 * @param {String} [text]
 */
Document.prototype.addNewText = function (boundingRectangle, text) {
};
/**
 * @since Flash MX 2004
 * @param {String} alignMode
 * @param {Boolean} [bUseDocumentBounds]
 */
Document.prototype.align = function (alignMode, bUseDocumentBounds) {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @return {Boolean}
 */
Document.prototype.allowScreens = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} arrangeMode
 */
Document.prototype.arrange = function (arrangeMode) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.breakApart = function () {
};
/**
 * @since Flash MX 2004
 * @return {Boolean}
 */
Document.prototype.canEditSymbol = function () {
};
/**
 * @since Flash CC
 * @return {Boolean}
 */
Document.prototype.canDistributeToKeyframes = function () {
};
/**
 * @since Flash MX 2004
 * @return {Boolean}
 */
Document.prototype.canRevert = function () {
};
/**
 * @since Flash MX 2004
 * @return {Boolean}
 */
Document.prototype.canTestMovie = function () {
};
/**
 * @since Flash MX 2004
 * @return {Boolean}
 */
Document.prototype.canTestScene = function () {
};
/**
 * @since Flash 8
 * @param {Number} oldIndex
 * @param {Number} newIndex
 */
Document.prototype.changeFilterOrder = function (oldIndex, newIndex) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.clipCopy = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.clipCut = function () {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} [bInPlace]
 */
Document.prototype.clipPaste = function (bInPlace) {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} [bPromptToSaveChanges]
 */
Document.prototype.close = function (bPromptToSaveChanges) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.convertLinesToFills = function () {
};
/**
 * @since Flash CC
 * @return {Boolean}
 */
Document.prototype.convertSelectionToBitmap = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} type
 * @param {String} name
 * @param {String} registrationPoint
 * @return {SymbolItem}
 */
Document.prototype.convertToSymbol = function (type, name, registrationPoint) {
};
/**
 * @since Flash 8
 * @return {Boolean}
 */
Document.prototype.crop = function () {
};
/**
 * @since Flash CS5
 * @param {Boolean} [abortIfErrorsExist]
 */
Document.prototype.debugMovie = function (abortIfErrorsExist) {
};
/**
 * @since Flash 8
 * @return {Boolean}
 */
Document.prototype.deleteEnvelope = function () {
};
/**
 * @since Flash MX 2004
 * @return {Number}
 */
Document.prototype.deletePublishProfile = function () {
};
/**
 * @since Flash MX 2004
 * @return {Boolean}
 */
Document.prototype.deleteScene = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.deleteSelection = function () {
};
/**
 * @since Flash 8
 */
Document.prototype.disableAllFilters = function () {
};
/**
 * @since Flash 8
 * @param {Number} filterIndex
 */
Document.prototype.disableFilter = function (filterIndex) {
};
/**
 * @since Flash 8
 * @param {Number} enabledFilterIndex
 */
Document.prototype.disableOtherFilters = function (enabledFilterIndex) {
};
/**
 * @since Flash MX 2004
 * @param {String} distributeMode
 * @param {Boolean} [bUseDocumentBounds]
 */
Document.prototype.distribute = function (distributeMode, bUseDocumentBounds) {
};
/**
 * @since Flash CC
 */
Document.prototype.distributeToKeyframes = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.distributeToLayers = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @return {Boolean}
 */
Document.prototype.documentHasData = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {String} [profileName]
 * @return {Number}
 */
Document.prototype.duplicatePublishProfile = function (profileName) {
};
/**
 * @since Flash MX 2004
 * @return {Boolean}
 */
Document.prototype.duplicateScene = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.duplicateSelection = function () {
};
/**
 * @since Flash MX 2004
 * @param {Number} index
 */
Document.prototype.editScene = function (index) {
};
/**
 * @since Flash 8
 */
Document.prototype.enableAllFilters = function () {
};
/**
 * @since Flash 8
 * @param {Number} filterIndex
 */
Document.prototype.enableFilter = function (filterIndex) {
};
/**
 * @since Flash MX 2004
 * @param {String} [editMode]
 */
Document.prototype.enterEditMode = function (editMode) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.exitEditMode = function () {
};
/**
 * @since Flash CS6
 * @param {Number} frameNumber
 * @param {String} bitmapName
 */
Document.prototype.exportInstanceToLibrary = function (frameNumber, bitmapName) {
};
/**
 * @since Flash CS6
 * @param {String} outputURI
 * @param {Number} [startFrameNum]
 * @param {Number} [endFrameNum]
 * @param {Matrix} [matrix]
 */
Document.prototype.exportInstanceToPNGSequence = function (outputURI, startFrameNum, endFrameNum, matrix) {
};
/**
 * @since Flash 8
 * @param {String} fileURI
 * @param {Boolean} [bCurrentPNGSettings]
 * @param {Boolean} [bCurrentFrame]
 * @return {Boolean}
 */
Document.prototype.exportPNG = function (fileURI, bCurrentPNGSettings, bCurrentFrame) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 */
Document.prototype.exportPublishProfile = function (fileURI) {
};
/**
 * @since Flash CS4
 * @param {String} [profileName]
 * @return {String}
 */
Document.prototype.exportPublishProfileString = function (profileName) {
};
/**
 * @since Flash MX 2004
 * @param {String} [fileURI]
 * @param {Boolean} [bCurrentSettings]
 */
Document.prototype.exportSWF = function (fileURI, bCurrentSettings) {
};
/**
 * @since Flash CC
 * @param {String} fileURI
 * @param {Boolean} [convertInAdobeMediaEncoder]
 * @param {Boolean} [transparent]
 * @param {Boolean} [stopAtFrame]
 * @param {Number} [stopAtFrameOrTime]
 */
Document.prototype.exportVideo = function (fileURI, convertInAdobeMediaEncoder, transparent, stopAtFrame,
                                           stopAtFrameOrTime) {
};
/**
 * @since Flash MX 2004
 * @return {Boolean}
 */
Document.prototype.getAlignToDocument = function () {
};
/**
 * @since Flash 8
 * @return {String}
 */
Document.prototype.getBlendMode = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} [objectToFill]
 * @return {Fill}
 */
Document.prototype.getCustomFill = function (objectToFill) {
};
/**
 * @since Flash MX 2004
 * @param {String} [locationOfStroke]
 * @return {Stroke}
 */
Document.prototype.getCustomStroke = function (locationOfStroke) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @return {Object}
 */
Document.prototype.getDataFromDocument = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {String} propertyName
 * @return {Object}
 */
Document.prototype.getElementProperty = function (propertyName) {
};
/**
 * @since Flash MX 2004
 * @param {String} attrName
 * @param {Number} [startIndex]
 * @param {Number} [endIndex]
 * @return {Object}
 */
Document.prototype.getElementTextAttr = function (attrName, startIndex, endIndex) {
};
/**
 * @since Flash 8
 * @return {Array.<Filter>}
 */
Document.prototype.getFilters = function () {
};
/**
 * @since Flash 8
 * @return {String}
 */
Document.prototype.getMetadata = function () {
};
/**
 * @since Flash CS3
 * @return {String}
 */
Document.prototype.getMobileSettings = function () {
};
/**
 * @since Flash CS3
 * @return {String}
 */
Document.prototype.getPlayerVersion = function () {
};
/**
 * @since Flash CC
 * @param {String} format
 * @return {Boolean}
 */
Document.prototype.getPublishDocumentData = function (format) {
};
/**
 * @since Flash MX 2004
 * @return {{left:Number,top:Number,right:Number,bottom:Number}}
 */
Document.prototype.getSelectionRect = function () {
};
/**
 * @since Flash CS6
 * @return {String}
 */
Document.prototype.getSWFPathFromProfile = function () {
};
/**
 * @since Flash CC
 * @return {Boolean}
 */
Document.prototype.getTelemetryForSwf = function () {
};
/**
 * @since Flash MX 2004
 * @param {Number} [startIndex]
 * @param {Number} [endIndex]
 * @return {String}
 */
Document.prototype.getTextString = function (startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @return {Timeline}
 */
Document.prototype.getTimeline = function () {
};
/**
 * @since Flash MX 2004
 * @return {{x:Number,y:Number}}
 */
Document.prototype.getTransformationPoint = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.group = function () {
};
/**
 * @since Flash 8
 * @param {String} fileURI
 * @param {Boolean} [importToLibrary]
 * @param {Boolean} [showDialog]
 * @param {Boolean} [showImporterUI]
 * @return {Boolean}
 */
Document.prototype.importFile = function (fileURI, importToLibrary, showDialog, showImporterUI) {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @return {Number}
 */
Document.prototype.importPublishProfile = function (fileURI) {
};
/**
 * @since Flash CS4
 * @param {String} xmlString
 * @return {Boolean}
 */
Document.prototype.importPublishProfileString = function (xmlString) {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @param {String} fileURI
 */
Document.prototype.importSWF = function (fileURI) {
};
/**
 * @since Flash 8
 * @return {Boolean}
 */
Document.prototype.intersect = function () {
};
/**
 * @since Flash CS5
 * @deprecated
 * @param {String} URI
 */
Document.prototype.loadCuepointXML = function (URI) {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} bWidth
 * @param {Boolean} bHeight
 * @param {Boolean} [bUseDocumentBounds]
 */
Document.prototype.match = function (bWidth, bHeight, bUseDocumentBounds) {
};
/**
 * @since Flash MX 2004
 * @param {{x:Number,y:Number}} position
 * @param {Boolean} bToggleSel
 * @param {Boolean} bShiftSel
 */
Document.prototype.mouseClick = function (position, bToggleSel, bShiftSel) {
};
/**
 * @since Flash MX 2004
 * @param {{x:Number,y:Number}} position
 * @param {Boolean} bAltDown
 * @param {Boolean} bShiftDown
 * @param {Boolean} bShiftSelect
 */
Document.prototype.mouseDblClk = function (position, bAltDown, bShiftDown, bShiftSelect) {
};
/**
 * @since Flash MX 2004
 * @param {{x:Number,y:Number}} delta
 */
Document.prototype.moveSelectedBezierPointsBy = function (delta) {
};
/**
 * @since Flash MX 2004
 * @param {{x:Number,y:Number}} distanceToMove
 */
Document.prototype.moveSelectionBy = function (distanceToMove) {
};
/**
 * @since Flash MX 2004
 * @param {Number} smoothing
 * @param {Boolean} bUseMultiplePasses
 */
Document.prototype.optimizeCurves = function (smoothing, bUseMultiplePasses) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.publish = function () {
};
/**
 * @since Flash 8
 * @return {Boolean}
 */
Document.prototype.punch = function () {
};
/**
 * @since Flash 8
 */
Document.prototype.removeAllFilters = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 */
Document.prototype.removeDataFromDocument = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 */
Document.prototype.removeDataFromSelection = function (name) {
};
/**
 * @since Flash 8
 * @param {Number} filterIndex
 */
Document.prototype.removeFilter = function (filterIndex) {
};
/**
 * @since Flash MX 2004
 * @param {String} [profileNewName]
 * @return {Boolean}
 */
Document.prototype.renamePublishProfile = function (profileNewName) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @return {Boolean}
 */
Document.prototype.renameScene = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {Number} sceneToMove
 * @param {Number} sceneToPutItBefore
 */
Document.prototype.reorderScene = function (sceneToMove, sceneToPutItBefore) {
};
/**
 * @since Flash CS3
 */
Document.prototype.resetOvalObject = function () {
};
/**
 * @since Flash CS3
 */
Document.prototype.resetRectangleObject = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.resetTransformation = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.revert = function () {
};
/**
 * @since Flash CS4
 * @param {{x:Number,y:Number,z:Number}} xyzCoordinate
 * @param {Boolean} bGlobalTransform
 */
Document.prototype.rotate3DSelection = function (xyzCoordinate, bGlobalTransform) {
};
/**
 * @since Flash MX 2004
 * @param {Number} angle
 * @param {String} [rotationPoint]
 */
Document.prototype.rotateSelection = function (angle, rotationPoint) {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} [bOkToSaveAs]
 * @return {Boolean}
 */
Document.prototype.save = function (bOkToSaveAs) {
};
/**
 * @since Flash CS6
 * @param {String} URI
 * @param {Boolean} [selectionOnly]
 * @return {Boolean}
 */
Document.prototype.saveAsCopy = function (URI, selectionOnly) {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @param {Boolean} [bOkToSaveAs]
 * @return {Boolean}
 */
Document.prototype.saveAndCompact = function (bOkToSaveAs) {
};
/**
 * @since Flash MX 2004
 * @param {Number} xScale
 * @param {Number} yScale
 * @param {String} whichCorner
 */
Document.prototype.scaleSelection = function (xScale, yScale, whichCorner) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.selectAll = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.selectNone = function () {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} bToStage
 */
Document.prototype.setAlignToDocument = function (bToStage) {
};
/**
 * @since Flash 8
 * @param {String} mode
 */
Document.prototype.setBlendMode = function (mode) {
};
/**
 * @since Flash MX 2004
 * @param {Fill} fill
 */
Document.prototype.setCustomFill = function (fill) {
};
/**
 * @since Flash MX 2004
 * @param {Stroke} stroke
 */
Document.prototype.setCustomStroke = function (stroke) {
};
/**
 * @since Flash MX 2004
 * @param {String} property
 * @param {Object} value
 */
Document.prototype.setElementProperty = function (property, value) {
};
/**
 * @since Flash MX 2004
 * @param {String} attrName
 * @param {Object} attrValue
 * @param {Number} [startIndex]
 * @param {Number} [endIndex]
 * @return {Boolean}
 */
Document.prototype.setElementTextAttr = function (attrName, attrValue, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {String|Number} color
 */
Document.prototype.setFillColor = function (color) {
};
/**
 * @since Flash 8
 * @param {String} property
 * @param {Number} filterIndex
 * @param {Object} value
 */
Document.prototype.setFilterProperty = function (property, filterIndex, value) {
};
/**
 * @since Flash 8
 * @param {Array.<Filter>} filterArray
 */
Document.prototype.setFilters = function (filterArray) {
};
/**
 * @since Flash MX 2004
 * @param {Number} opacity
 */
Document.prototype.setInstanceAlpha = function (opacity) {
};
/**
 * @since Flash MX 2004
 * @param {Number} brightness
 */
Document.prototype.setInstanceBrightness = function (brightness) {
};
/**
 * @since Flash MX 2004
 * @param {String|Number} color
 * @param {Number} strength
 */
Document.prototype.setInstanceTint = function (color, strength) {
};
/**
 * @since Flash 8
 * @param {String} strMetadata
 * @return {Boolean}
 */
Document.prototype.setMetadata = function (strMetadata) {
};
/**
 * @since Flash CS3
 * @param {String} xmlString
 * @return {Boolean}
 */
Document.prototype.setMobileSettings = function (xmlString) {
};
/**
 * @since Flash CS3
 * @param {String} propertyName
 * @param {Object} value
 */
Document.prototype.setOvalObjectProperty = function (propertyName, value) {
};
/**
 * @since Flash CS3
 * @param {String} version
 * @return {Boolean}
 */
Document.prototype.setPlayerVersion = function (version) {
};
/**
 * @since Flash CC
 * @param {String} format
 * @param {Boolean} publish
 */
Document.prototype.setPublishDocumentData = function (format, publish) {
};
/**
 * @since Flash CS3
 * @param {String} propertyName
 * @param {Object} value
 */
Document.prototype.setRectangleObjectProperty = function (propertyName, value) {
};
/**
 * @since Flash MX 2004
 * @param {{left:Number,top:Number,right:Number,bottom:Number}} boundingRectangle
 * @param {Boolean} [bContactSensitiveSelection]
 */
Document.prototype.setSelectionBounds = function (boundingRectangle, bContactSensitiveSelection) {
};
/**
 * @since Flash MX 2004
 * @param {{left:Number,top:Number,right:Number,bottom:Number}} rect
 * @param {Boolean} [bReplaceCurrentSelection]
 * @param {Boolean} [bContactSensitiveSelection]
 */
Document.prototype.setSelectionRect = function (rect, bReplaceCurrentSelection, bContactSensitiveSelection) {
};
/**
 * @since Flash CS4
 * @param {{x:Number,y:Number}} point
 */
Document.prototype.setStageVanishingPoint = function (point) {
};
/**
 * @since Flash CS4
 * @param {Number} angle
 */
Document.prototype.setStageViewAngle = function (angle) {
};
/**
 * @since Flash MX 2004
 * @param {String|Number} color
 * @param {Number} size
 * @param {String} strokeType
 */
Document.prototype.setStroke = function (color, size, strokeType) {
};
/**
 * @since Flash MX 2004
 * @param {String|Number} color
 */
Document.prototype.setStrokeColor = function (color) {
};
/**
 * @since Flash MX 2004
 * @param {Number} size
 */
Document.prototype.setStrokeSize = function (size) {
};
/**
 * @since Flash MX 2004
 * @param {String} strokeType
 */
Document.prototype.setStrokeStyle = function (strokeType) {
};
/**
 * @since Flash MX 2004
 * @param {{left:Number,top:Number,right:Number,bottom:Number}} boundingRectangle
 * @return {Boolean}
 */
Document.prototype.setTextRectangle = function (boundingRectangle) {
};
/**
 * @since Flash MX 2004
 * @param {Number} startIndex
 * @param {Number} endIndex
 * @return {Boolean}
 */
Document.prototype.setTextSelection = function (startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {String} text
 * @param {Number} [startIndex]
 * @param {Number} [endIndex]
 * @return {Boolean}
 */
Document.prototype.setTextString = function (text, startIndex, endIndex) {
};
/**
 * @since Flash MX 2004
 * @param {{x:Number,y:Number}} transformationPoint
 */
Document.prototype.setTransformationPoint = function (transformationPoint) {
};
/**
 * @since Flash MX 2004
 * @param {Number} xSkew
 * @param {Number} ySkew
 * @param {String} whichEdge
 */
Document.prototype.skewSelection = function (xSkew, ySkew, whichEdge) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.smoothSelection = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} direction
 * @param {Boolean} [bUseDocumentBounds]
 */
Document.prototype.space = function (direction, bUseDocumentBounds) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.straightenSelection = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 */
Document.prototype.swapElement = function (name) {
};
/**
 * @since Flash 8
 */
Document.prototype.swapStrokeAndFill = function () {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} [abortIfErrorsExist]
 */
Document.prototype.testMovie = function (abortIfErrorsExist) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.testScene = function () {
};
/**
 * @since Flash MX 2004
 * @param {Number} threshold
 * @param {Number} minimumArea
 * @param {String} curveFit
 * @param {String} cornerThreshold
 */
Document.prototype.traceBitmap = function (threshold, minimumArea, curveFit, cornerThreshold) {
};
/**
 * @since Flash MX 2004
 * @param {Number} a
 * @param {Number} b
 * @param {Number} c
 * @param {Number} d
 */
Document.prototype.transformSelection = function (a, b, c, d) {
};
/**
 * @since Flash CS4
 * @param {{x:Number,y:Number,z:Number}} xyzCoordinate
 */
Document.prototype.translate3DCenter = function (xyzCoordinate) {
};
/**
 * @since Flash CS4
 * @param {{x:Number,y:Number,z:Number}} xyzCoordinate
 * @param {Boolean} bGlobalTransform
 */
Document.prototype.translate3DSelection = function (xyzCoordinate, bGlobalTransform) {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.unGroup = function () {
};
/**
 * @since Flash 8
 * @return {Boolean}
 */
Document.prototype.union = function () {
};
/**
 * @since Flash MX 2004
 */
Document.prototype.unlockAllElements = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} fileURI
 * @return {Object}
 */
Document.prototype.xmlPanel = function (fileURI) {
};
/**
 * @since Flash MX 2004
 * @class {Library}
 */
Library = function () {
};
/**
 * @since Flash MX 2004
 * @type {Array.<Item>}
 */
Library.prototype.items = null;
/**
 * @since Flash CC
 * @type {Array.<Item>}
 */
Library.prototype.unusedItems = null;
/**
 * @since Flash MX 2004
 * @param {{x:Number,y:Number}} position
 * @param {String} [namePath]
 * @return {Boolean}
 */
Library.prototype.addItemToDocument = function (position, namePath) {
};
/**
 * @since Flash MX 2004
 * @param {String} type
 * @param {String} [namePath]
 * @return {Boolean}
 */
Library.prototype.addNewItem = function (type, namePath) {
};
/**
 * @since Flash MX 2004
 * @param {String} [namePath]
 * @return {Boolean}
 */
Library.prototype.deleteItem = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {String} [namePath]
 * @return {Boolean}
 */
Library.prototype.duplicateItem = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {String} [namePath]
 * @return {Boolean}
 */
Library.prototype.editItem = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} bExpand
 * @param {Boolean} [bRecurseNestedParents]
 * @param {String} [namePath]
 * @return {Boolean}
 */
Library.prototype.expandFolder = function (bExpand, bRecurseNestedParents, namePath) {
};
/**
 * @since Flash MX 2004
 * @param {String} namePath
 * @return {Number}
 */
Library.prototype.findItemIndex = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {String} property
 * @return {Object}
 */
Library.prototype.getItemProperty = function (property) {
};
/**
 * @since Flash MX 2004
 * @param {String} [namePath]
 * @return {String}
 */
Library.prototype.getItemType = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @return {Array.<Item>}
 */
Library.prototype.getSelectedItems = function () {
};
/**
 * @since Flash MX 2004
 * @deprecated
 * @param {String} linkageName
 * @param {Array} swfData
 * @param {String} [libName]
 */
Library.prototype.importEmbeddedSWF = function (linkageName, swfData, libName) {
};
/**
 * @since Flash MX 2004
 * @param {String} namePath
 * @return {Boolean}
 */
Library.prototype.itemExists = function (namePath) {
};
/**
 * @since Flash MX 2004
 * @param {String} folderPath
 * @param {String} [itemToMove]
 * @param {Boolean} [bReplace]
 * @return {Boolean}
 */
Library.prototype.moveToFolder = function (folderPath, itemToMove, bReplace) {
};
/**
 * @since Flash MX 2004
 * @param {String} [folderPath]
 * @return {Boolean}
 */
Library.prototype.newFolder = function (folderPath) {
};
/**
 * @since Flash MX 2004
 * @param {String} name
 * @return {Boolean}
 */
Library.prototype.renameItem = function (name) {
};
/**
 * @since Flash MX 2004
 * @param {Boolean} [bSelectAll]
 */
Library.prototype.selectAll = function (bSelectAll) {
};
/**
 * @since Flash MX 2004
 * @param {String} namePath
 * @param {Boolean} [bReplaceCurrentSelection]
 * @param {Boolean} [bSelect]
 * @return {Boolean}
 */
Library.prototype.selectItem = function (namePath, bReplaceCurrentSelection, bSelect) {
};
/**
 * @since Flash MX 2004
 */
Library.prototype.selectNone = function () {
};
/**
 * @since Flash MX 2004
 * @param {String} property
 * @param {Object} value
 */
Library.prototype.setItemProperty = function (property, value) {
};
/**
 * @since Flash MX 2004
 * @param {String} [namePath]
 * @return {Boolean}
 */
Library.prototype.updateItem = function (namePath) {
};