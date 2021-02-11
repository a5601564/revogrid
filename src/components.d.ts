/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Edition, Observable, RevoGrid, RevoPlugin, Selection, ThemeSpace } from "./interfaces";
import { AutoSizeColumnConfig } from "./plugins/autoSizeColumn";
import { ColumnFilterConfig, FilterCollection } from "./plugins/filter/filter.plugin";
import { GroupingOptions } from "./plugins/groupingRow/grouping.row.types";
import { ColumnCollection } from "./services/column.data.provider";
import { DataInput } from "./plugins/export/types";
import { VNode } from "@stencil/core";
import { ColumnSource, RowSource } from "./components/data/columnService";
import { LogicFunction } from "./plugins/filter/filter.types";
import { FilterItem, ShowData } from "./plugins/filter/filter.pop";
import { DataSourceState, Groups } from "./store/dataSource/data.store";
import { BeforeEdit } from "./components/overlay/revogr-overlay-selection";
export namespace Components {
    interface RevoGrid {
        /**
          * Add trimmed by type
         */
        "addTrimmed": (trimmed: Record<number, boolean>, trimmedType?: string, type?: RevoGrid.DimensionRows) => Promise<CustomEvent<{ trimmed: Record<number, boolean>; trimmedType: string; type: string; }>>;
        /**
          * Autosize config Enable columns autoSize, for more details check @autoSizeColumn plugin By default disabled, hence operation is not resource efficient true to enable with default params (double header separator click for autosize) or provide config
         */
        "autoSizeColumn": boolean | AutoSizeColumnConfig;
        /**
          * When true cell focus appear.
         */
        "canFocus": boolean;
        /**
          * Clear current grid focus
         */
        "clearFocus": () => Promise<void>;
        /**
          * Indicates default column size.
         */
        "colSize": number;
        /**
          * Types Every type represent multiple column properties Types will be merged but can be replaced with column properties
         */
        "columnTypes": { [name: string]: RevoGrid.ColumnType };
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns": (RevoGrid.ColumnRegular | RevoGrid.ColumnGrouping)[];
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        /**
          * Enables export plugin Can be boolean Can be export options
         */
        "exporting": boolean;
        /**
          * Enables filter plugin Can be boolean Can be filter collection
         */
        "filter": boolean | ColumnFilterConfig;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize": number;
        /**
          * Provides access to column internal store observer Can be used for plugin support
          * @param type - type of column
         */
        "getColumnStore": (type?: RevoGrid.DimensionCols) => Promise<import("/Users/maks/Projects/revogridjs/src/interfaces").Observable<import("/Users/maks/Projects/revogridjs/src/store/dataSource/data.store").DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>>;
        /**
          * Receive all columns in data source
         */
        "getColumns": () => Promise<RevoGrid.ColumnRegular[]>;
        /**
          * Get all active plugins instances
         */
        "getPlugins": () => Promise<RevoPlugin.Plugin[]>;
        /**
          * Get data from source
         */
        "getSource": (type?: RevoGrid.DimensionRows) => Promise<RevoGrid.DataType[]>;
        /**
          * Provides access to rows internal store observer Can be used for plugin support
          * @param type - type of source
         */
        "getSourceStore": (type?: RevoGrid.DimensionRows) => Promise<import("/Users/maks/Projects/revogridjs/src/interfaces").Observable<import("/Users/maks/Projects/revogridjs/src/store/dataSource/data.store").DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>>;
        /**
          * Get data from visible part of source Trimmed/filtered rows will be excluded
          * @param type - type of source
         */
        "getVisibleSource": (type?: RevoGrid.DimensionRows) => Promise<any[]>;
        /**
          * Group models by provided properties Define properties to be groped by
         */
        "grouping": GroupingOptions;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource": RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource": RevoGrid.DataType[];
        /**
          * Custom grid plugins Has to be predefined during first grid init Every plugin should be inherited from BasePlugin
         */
        "plugins": RevoPlugin.PluginClass[];
        /**
          * When true, user can range selection.
         */
        "range": boolean;
        /**
          * When true, grid in read only mode.
         */
        "readonly": boolean;
        /**
          * Refreshes data viewport. Can be specific part as row or pinned row or 'all' by default.
         */
        "refresh": (type?: RevoGrid.DimensionRows | 'all') => Promise<void>;
        /**
          * Register new virtual node inside of grid Used for additional items creation such as plugin elements
         */
        "registerVNode": (elements: VNode[]) => Promise<void>;
        /**
          * When true, columns are resizable.
         */
        "resize": boolean;
        /**
          * Row class property Define this property in row object and this will be mapped as row class
         */
        "rowClass": string;
        /**
          * Row properies applied
         */
        "rowDefinitions": RevoGrid.RowDefinition[];
        /**
          * Excel like show row indexe per row
         */
        "rowHeaders": RevoGrid.RowHeaders | boolean;
        /**
          * Indicates default row size. By default 0, means theme package size will be applied
         */
        "rowSize": number;
        /**
          * Scrolls view port to specified column index
         */
        "scrollToColumnIndex": (coordinate?: number) => Promise<void>;
        /**
          * Scrolls view port to specified column prop
         */
        "scrollToColumnProp": (prop: RevoGrid.ColumnProp) => Promise<void>;
        /**
          * Scrolls view port to coordinate
         */
        "scrollToCoordinate": (cell: Partial<Selection.Cell>) => Promise<void>;
        /**
          * Scrolls view port to specified row index
         */
        "scrollToRow": (coordinate?: number) => Promise<void>;
        /**
          * Bring cell to edit mode
         */
        "setCellEdit": (row: number, prop: RevoGrid.ColumnProp, rowSource?: RevoGrid.DimensionRows) => Promise<void>;
        /**
          * Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop
         */
        "source": RevoGrid.DataType[];
        /**
          * Theme name
         */
        "theme": ThemeSpace.Theme;
        /**
          * Trimmed rows Functionality which allows to hide rows from main data set
          * @trimmedRows are physical row indexes to hide
         */
        "trimmedRows": Record<number, boolean>;
        /**
          * Update column sorting
          * @param column - full column details to update
          * @param index - virtual column index
          * @param order - order to apply
         */
        "updateColumnSorting": (column: RevoGrid.ColumnRegular, index: number, order: 'asc' | 'desc') => Promise<RevoGrid.ColumnRegular>;
        /**
          * Update columns
         */
        "updateColumns": (cols: RevoGrid.ColumnRegular[]) => Promise<void>;
    }
    interface RevogrClipboard {
        "doCopy": (e: DataTransfer, data?: RevoGrid.DataFormat[][]) => Promise<void>;
    }
    interface RevogrData {
        "canDrag": boolean;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "colData": ColumnSource;
        "dataStore": RowSource;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        "range": boolean;
        "readonly": boolean;
        "rowClass": string;
        "rowSelectionStore": Observable<Selection.SelectionStoreState>;
        "viewportCol": Observable<RevoGrid.ViewportState>;
        "viewportRow": Observable<RevoGrid.ViewportState>;
    }
    interface RevogrEdit {
        "column": RevoGrid.ColumnRegular | null;
        "editCell": Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor": Edition.EditorCtr | null;
    }
    interface RevogrFilterPanel {
        "filterEntities": Record<string, LogicFunction>;
        "filterNames": Record<string, string>;
        "filterTypes": Record<string, string[]>;
        "getChanges": () => Promise<ShowData>;
        "show": (newEntity?: ShowData) => Promise<void>;
        "uuid": string;
    }
    interface RevogrFocus {
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore": Observable<Selection.SelectionStoreState>;
    }
    interface RevogrHeader {
        "canResize": boolean;
        "colData": RevoGrid.ColumnRegular[];
        "columnFilter": boolean;
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "groupingDepth": number;
        "groups": Groups;
        "parent": string;
        "selectionStore": Observable<Selection.SelectionStoreState>;
        "viewportCol": Observable<RevoGrid.ViewportState>;
    }
    interface RevogrOrderEditor {
        "clearOrder": () => Promise<void>;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        "dragStart": (e: MouseEvent) => Promise<void>;
        "endOrder": (e: MouseEvent) => Promise<void>;
        "parent": HTMLElement;
    }
    interface RevogrOverlaySelection {
        "canDrag": boolean;
        "colData": Observable<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        /**
          * Last cell position
         */
        "lastCell": Selection.Cell;
        "range": boolean;
        "readonly": boolean;
        /**
          * Dynamic stores
         */
        "selectionStore": Observable<Selection.SelectionStoreState>;
    }
    interface RevogrScrollVirtual {
        "changeScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<RevoGrid.ViewPortScrollEvent>;
        "dimension": RevoGrid.DimensionType;
        "dimensionStore": Observable<RevoGrid.DimensionSettingsState>;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
        "viewportStore": Observable<RevoGrid.ViewportState>;
    }
    interface RevogrTempRange {
        "dimensionCol": Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow": Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore": Observable<Selection.SelectionStoreState>;
    }
    interface RevogrViewport {
        /**
          * Clear current grid focus
         */
        "clearFocus": () => Promise<void>;
        "columnFilter": boolean;
        "columnStores": { [T in RevoGrid.DimensionCols]: Observable<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>> };
        "dimensions": { [T in RevoGrid.MultiDimensionType]: Observable<RevoGrid.DimensionSettingsState> };
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        "range": boolean;
        "readonly": boolean;
        "resize": boolean;
        "rowClass": string;
        /**
          * Show row indexes column
         */
        "rowHeaders": RevoGrid.RowHeaders | boolean;
        "rowStores": { [T in RevoGrid.DimensionRows]: Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>> };
        "scrollToCoordinate": (cell: Partial<Selection.Cell>) => Promise<void>;
        "setEdit": (rowIndex: number, colIndex: number, colType: RevoGrid.DimensionCols, rowType: RevoGrid.DimensionRows) => Promise<void>;
        "uuid": string | null;
        "viewports": { [T in RevoGrid.MultiDimensionType]: Observable<RevoGrid.ViewportState> };
    }
    interface RevogrViewportScroll {
        "changeScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<RevoGrid.ViewPortScrollEvent>;
        "contentHeight": number;
        "contentWidth": number;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
    }
}
declare global {
    interface HTMLRevoGridElement extends Components.RevoGrid, HTMLStencilElement {
    }
    var HTMLRevoGridElement: {
        prototype: HTMLRevoGridElement;
        new (): HTMLRevoGridElement;
    };
    interface HTMLRevogrClipboardElement extends Components.RevogrClipboard, HTMLStencilElement {
    }
    var HTMLRevogrClipboardElement: {
        prototype: HTMLRevogrClipboardElement;
        new (): HTMLRevogrClipboardElement;
    };
    interface HTMLRevogrDataElement extends Components.RevogrData, HTMLStencilElement {
    }
    var HTMLRevogrDataElement: {
        prototype: HTMLRevogrDataElement;
        new (): HTMLRevogrDataElement;
    };
    interface HTMLRevogrEditElement extends Components.RevogrEdit, HTMLStencilElement {
    }
    var HTMLRevogrEditElement: {
        prototype: HTMLRevogrEditElement;
        new (): HTMLRevogrEditElement;
    };
    interface HTMLRevogrFilterPanelElement extends Components.RevogrFilterPanel, HTMLStencilElement {
    }
    var HTMLRevogrFilterPanelElement: {
        prototype: HTMLRevogrFilterPanelElement;
        new (): HTMLRevogrFilterPanelElement;
    };
    interface HTMLRevogrFocusElement extends Components.RevogrFocus, HTMLStencilElement {
    }
    var HTMLRevogrFocusElement: {
        prototype: HTMLRevogrFocusElement;
        new (): HTMLRevogrFocusElement;
    };
    interface HTMLRevogrHeaderElement extends Components.RevogrHeader, HTMLStencilElement {
    }
    var HTMLRevogrHeaderElement: {
        prototype: HTMLRevogrHeaderElement;
        new (): HTMLRevogrHeaderElement;
    };
    interface HTMLRevogrOrderEditorElement extends Components.RevogrOrderEditor, HTMLStencilElement {
    }
    var HTMLRevogrOrderEditorElement: {
        prototype: HTMLRevogrOrderEditorElement;
        new (): HTMLRevogrOrderEditorElement;
    };
    interface HTMLRevogrOverlaySelectionElement extends Components.RevogrOverlaySelection, HTMLStencilElement {
    }
    var HTMLRevogrOverlaySelectionElement: {
        prototype: HTMLRevogrOverlaySelectionElement;
        new (): HTMLRevogrOverlaySelectionElement;
    };
    interface HTMLRevogrScrollVirtualElement extends Components.RevogrScrollVirtual, HTMLStencilElement {
    }
    var HTMLRevogrScrollVirtualElement: {
        prototype: HTMLRevogrScrollVirtualElement;
        new (): HTMLRevogrScrollVirtualElement;
    };
    interface HTMLRevogrTempRangeElement extends Components.RevogrTempRange, HTMLStencilElement {
    }
    var HTMLRevogrTempRangeElement: {
        prototype: HTMLRevogrTempRangeElement;
        new (): HTMLRevogrTempRangeElement;
    };
    interface HTMLRevogrViewportElement extends Components.RevogrViewport, HTMLStencilElement {
    }
    var HTMLRevogrViewportElement: {
        prototype: HTMLRevogrViewportElement;
        new (): HTMLRevogrViewportElement;
    };
    interface HTMLRevogrViewportScrollElement extends Components.RevogrViewportScroll, HTMLStencilElement {
    }
    var HTMLRevogrViewportScrollElement: {
        prototype: HTMLRevogrViewportScrollElement;
        new (): HTMLRevogrViewportScrollElement;
    };
    interface HTMLElementTagNameMap {
        "revo-grid": HTMLRevoGridElement;
        "revogr-clipboard": HTMLRevogrClipboardElement;
        "revogr-data": HTMLRevogrDataElement;
        "revogr-edit": HTMLRevogrEditElement;
        "revogr-filter-panel": HTMLRevogrFilterPanelElement;
        "revogr-focus": HTMLRevogrFocusElement;
        "revogr-header": HTMLRevogrHeaderElement;
        "revogr-order-editor": HTMLRevogrOrderEditorElement;
        "revogr-overlay-selection": HTMLRevogrOverlaySelectionElement;
        "revogr-scroll-virtual": HTMLRevogrScrollVirtualElement;
        "revogr-temp-range": HTMLRevogrTempRangeElement;
        "revogr-viewport": HTMLRevogrViewportElement;
        "revogr-viewport-scroll": HTMLRevogrViewportScrollElement;
    }
}
declare namespace LocalJSX {
    interface RevoGrid {
        /**
          * Autosize config Enable columns autoSize, for more details check @autoSizeColumn plugin By default disabled, hence operation is not resource efficient true to enable with default params (double header separator click for autosize) or provide config
         */
        "autoSizeColumn"?: boolean | AutoSizeColumnConfig;
        /**
          * When true cell focus appear.
         */
        "canFocus"?: boolean;
        /**
          * Indicates default column size.
         */
        "colSize"?: number;
        /**
          * Types Every type represent multiple column properties Types will be merged but can be replaced with column properties
         */
        "columnTypes"?: { [name: string]: RevoGrid.ColumnType };
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns"?: (RevoGrid.ColumnRegular | RevoGrid.ColumnGrouping)[];
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Enables export plugin Can be boolean Can be export options
         */
        "exporting"?: boolean;
        /**
          * Enables filter plugin Can be boolean Can be filter collection
         */
        "filter"?: boolean | ColumnFilterConfig;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize"?: number;
        /**
          * Group models by provided properties Define properties to be groped by
         */
        "grouping"?: GroupingOptions;
        /**
          * Column updated
         */
        "onAfterColumnsSet"?: (event: CustomEvent<{
    columns: ColumnCollection;
    order: Record<RevoGrid.ColumnProp, 'asc' | 'desc'>;
  }>) => void;
        /**
          * After edit. Triggered when after data applied or Range changeged.
         */
        "onAfterEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails | Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * After rows updated
         */
        "onAfterSourceSet"?: (event: CustomEvent<{
    type: RevoGrid.DimensionRows;
    source: RevoGrid.DataType[];
  }>) => void;
        /**
          * Notify trimmed applied
         */
        "onAfterTrimmed"?: (event: CustomEvent<any>) => void;
        /**
          * Before autofill. Triggered before autofill applied. Use e.preventDefault() to prevent edit data apply.
         */
        "onBeforeAutofill"?: (event: CustomEvent<Selection.ChangedRange>) => void;
        /**
          * Before cell focus changed. Use e.preventDefault() to prevent cell focus change.
         */
        "onBeforeCellFocus"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before column update
         */
        "onBeforeColumnsSet"?: (event: CustomEvent<ColumnCollection>) => void;
        /**
          * Before edit event. Triggered before edit data applied. Use e.preventDefault() to prevent edit data set and use you own. Use e.val = {your value} to replace edit result with your own.
         */
        "onBeforeEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before edit started Use e.preventDefault() to prevent edit
         */
        "onBeforeEditStart"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before export Use e.preventDefault() to prevent export Replace data in Event in case you want to modify it in export
         */
        "onBeforeExport"?: (event: CustomEvent<DataInput>) => void;
        /**
          * Before filter applied to data source Use e.preventDefault() to prevent cell focus change Update @collection if you wish to change filters
         */
        "onBeforeFilterApply"?: (event: CustomEvent<{ collection: FilterCollection }>) => void;
        /**
          * Before filter trimmed values Use e.preventDefault() to prevent value trimming and filter apply Update @collection if you wish to change filters Update @itemsToFilter if you wish to filter indexes of trimming
         */
        "onBeforeFilterTrimmed"?: (event: CustomEvent<{ collection: FilterCollection; itemsToFilter: Record<number, boolean> }>) => void;
        /**
          * Before range apply. Triggered before range applied. Use e.preventDefault() to prevent range.
         */
        "onBeforeRange"?: (event: CustomEvent<Selection.ChangedRange>) => void;
        /**
          * Before range edit event. Triggered before range data applied, when range selection happened. Use e.preventDefault() to prevent edit data set and use you own.
         */
        "onBeforeRangeEdit"?: (event: CustomEvent<Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * Before sorting event. Initial sorting triggered, if this event stops no other event called. Use e.preventDefault() to prevent sorting.
         */
        "onBeforeSorting"?: (event: CustomEvent<{
    column: RevoGrid.ColumnRegular;
    order: 'desc' | 'asc';
  }>) => void;
        /**
          * Before sorting apply. Use e.preventDefault() to prevent sorting data change.
         */
        "onBeforeSortingApply"?: (event: CustomEvent<{
    column: RevoGrid.ColumnRegular;
    order: 'desc' | 'asc';
  }>) => void;
        /**
          * Before data apply. You can override data source here
         */
        "onBeforeSourceSet"?: (event: CustomEvent<{
    type: RevoGrid.DimensionRows;
    source: RevoGrid.DataType[];
  }>) => void;
        /**
          * Before source update sorting apply. Use this event if you intended to prevent sorting on data update. Use e.preventDefault() to prevent sorting data change during rows source update.
         */
        "onBeforeSourceSortingApply"?: (event: CustomEvent<any>) => void;
        /**
          * Before trimmed values Use e.preventDefault() to prevent value trimming Update @trimmed if you wish to filter indexes of trimming
         */
        "onBeforeTrimmed"?: (event: CustomEvent<{ trimmed: Record<number, boolean>, trimmedType: string, type: string }>) => void;
        /**
          * On header click.
         */
        "onHeaderClick"?: (event: CustomEvent<RevoGrid.ColumnRegular>) => void;
        /**
          * Row order change started. Use e.preventDefault() to prevent row order change. Use e.text = 'new name' to change item name on start.
         */
        "onRowDragStart"?: (event: CustomEvent<{ pos: RevoGrid.PositionItem; text: string }>) => void;
        /**
          * Before row order apply. Use e.preventDefault() to prevent row order change.
         */
        "onRowOrderChanged"?: (event: CustomEvent<{ from: number; to: number }>) => void;
        /**
          * Triggered when view port scrolled
         */
        "onViewportScroll"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource"?: RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource"?: RevoGrid.DataType[];
        /**
          * Custom grid plugins Has to be predefined during first grid init Every plugin should be inherited from BasePlugin
         */
        "plugins"?: RevoPlugin.PluginClass[];
        /**
          * When true, user can range selection.
         */
        "range"?: boolean;
        /**
          * When true, grid in read only mode.
         */
        "readonly"?: boolean;
        /**
          * When true, columns are resizable.
         */
        "resize"?: boolean;
        /**
          * Row class property Define this property in row object and this will be mapped as row class
         */
        "rowClass"?: string;
        /**
          * Row properies applied
         */
        "rowDefinitions"?: RevoGrid.RowDefinition[];
        /**
          * Excel like show row indexe per row
         */
        "rowHeaders"?: RevoGrid.RowHeaders | boolean;
        /**
          * Indicates default row size. By default 0, means theme package size will be applied
         */
        "rowSize"?: number;
        /**
          * Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop
         */
        "source"?: RevoGrid.DataType[];
        /**
          * Theme name
         */
        "theme"?: ThemeSpace.Theme;
        /**
          * Trimmed rows Functionality which allows to hide rows from main data set
          * @trimmedRows are physical row indexes to hide
         */
        "trimmedRows"?: Record<number, boolean>;
    }
    interface RevogrClipboard {
        "onCopyRegion"?: (event: CustomEvent<DataTransfer>) => void;
        "onPasteRegion"?: (event: CustomEvent<string[][]>) => void;
    }
    interface RevogrData {
        "canDrag"?: boolean;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "colData"?: ColumnSource;
        "dataStore"?: RowSource;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        "onDragStartCell"?: (event: CustomEvent<MouseEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "rowClass"?: string;
        "rowSelectionStore"?: Observable<Selection.SelectionStoreState>;
        "viewportCol"?: Observable<RevoGrid.ViewportState>;
        "viewportRow"?: Observable<RevoGrid.ViewportState>;
    }
    interface RevogrEdit {
        "column"?: RevoGrid.ColumnRegular | null;
        "editCell"?: Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor"?: Edition.EditorCtr | null;
        "onCellEdit"?: (event: CustomEvent<Edition.SaveDataDetails>) => void;
        /**
          * Close editor event
         */
        "onCloseEdit"?: (event: CustomEvent<boolean | undefined>) => void;
    }
    interface RevogrFilterPanel {
        "filterEntities"?: Record<string, LogicFunction>;
        "filterNames"?: Record<string, string>;
        "filterTypes"?: Record<string, string[]>;
        "onFilterChange"?: (event: CustomEvent<FilterItem>) => void;
        "uuid"?: string;
    }
    interface RevogrFocus {
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore"?: Observable<Selection.SelectionStoreState>;
    }
    interface RevogrHeader {
        "canResize"?: boolean;
        "colData"?: RevoGrid.ColumnRegular[];
        "columnFilter"?: boolean;
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "groupingDepth"?: number;
        "groups"?: Groups;
        "onHeaderDblClick"?: (event: CustomEvent<RevoGrid.InitialHeaderClick>) => void;
        "onHeaderResize"?: (event: CustomEvent<RevoGrid.ViewSettingSizeProp>) => void;
        "onInitialHeaderClick"?: (event: CustomEvent<RevoGrid.InitialHeaderClick>) => void;
        "parent"?: string;
        "selectionStore"?: Observable<Selection.SelectionStoreState>;
        "viewportCol"?: Observable<RevoGrid.ViewportState>;
    }
    interface RevogrOrderEditor {
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Row dragged, new range ready to be applied
         */
        "onInitialRowDropped"?: (event: CustomEvent<{ from: number; to: number }>) => void;
        /**
          * Row move
         */
        "onInternalRowDrag"?: (event: CustomEvent<RevoGrid.PositionItem>) => void;
        /**
          * Row drag ended
         */
        "onInternalRowDragEnd"?: (event: CustomEvent<any>) => void;
        /**
          * Row drag started
         */
        "onInternalRowDragStart"?: (event: CustomEvent<{
    cell: Selection.Cell;
    text: string;
    pos: RevoGrid.PositionItem;
    event: MouseEvent;
  }>) => void;
        /**
          * Row mouse move
         */
        "onInternalRowMouseMove"?: (event: CustomEvent<Selection.Cell>) => void;
        "parent"?: HTMLElement;
    }
    interface RevogrOverlaySelection {
        "canDrag"?: boolean;
        "colData"?: Observable<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Last cell position
         */
        "lastCell"?: Selection.Cell;
        "onFocusCell"?: (event: CustomEvent<Selection.FocusedCells>) => void;
        "onInternalCellEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onInternalCopy"?: (event: CustomEvent<any>) => void;
        "onInternalFocusCell"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onInternalPaste"?: (event: CustomEvent<any>) => void;
        /**
          * Range data apply
         */
        "onInternalRangeDataApply"?: (event: CustomEvent<Edition.BeforeRangeSaveDataDetails>) => void;
        /**
          * Selection range changed
         */
        "onInternalSelectionChanged"?: (event: CustomEvent<Selection.ChangedRange>) => void;
        "onSetEdit"?: (event: CustomEvent<BeforeEdit>) => void;
        "onSetRange"?: (event: CustomEvent<Selection.RangeArea>) => void;
        "onSetTempRange"?: (event: CustomEvent<Selection.RangeArea | null>) => void;
        "onUnregister"?: (event: CustomEvent<any>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        /**
          * Dynamic stores
         */
        "selectionStore"?: Observable<Selection.SelectionStoreState>;
    }
    interface RevogrScrollVirtual {
        "dimension"?: RevoGrid.DimensionType;
        "dimensionStore"?: Observable<RevoGrid.DimensionSettingsState>;
        "onScrollVirtual"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "viewportStore"?: Observable<RevoGrid.ViewportState>;
    }
    interface RevogrTempRange {
        "dimensionCol"?: Observable<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: Observable<RevoGrid.DimensionSettingsState>;
        /**
          * Dynamic stores
         */
        "selectionStore"?: Observable<Selection.SelectionStoreState>;
    }
    interface RevogrViewport {
        "columnFilter"?: boolean;
        "columnStores"?: { [T in RevoGrid.DimensionCols]: Observable<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>> };
        "dimensions"?: { [T in RevoGrid.MultiDimensionType]: Observable<RevoGrid.DimensionSettingsState> };
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        "onBeforeEditStart"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onInitialRowDragStart"?: (event: CustomEvent<{ pos: RevoGrid.PositionItem; text: string }>) => void;
        "onSetDimensionSize"?: (event: CustomEvent<{ type: RevoGrid.MultiDimensionType; sizes: RevoGrid.ViewSettingSizeProp }>) => void;
        "onSetViewportCoordinate"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "onSetViewportSize"?: (event: CustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "resize"?: boolean;
        "rowClass"?: string;
        /**
          * Show row indexes column
         */
        "rowHeaders"?: RevoGrid.RowHeaders | boolean;
        "rowStores"?: { [T in RevoGrid.DimensionRows]: Observable<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>> };
        "uuid"?: string | null;
        "viewports"?: { [T in RevoGrid.MultiDimensionType]: Observable<RevoGrid.ViewportState> };
    }
    interface RevogrViewportScroll {
        "contentHeight"?: number;
        "contentWidth"?: number;
        "onResizeViewport"?: (event: CustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "onScrollViewport"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
    }
    interface IntrinsicElements {
        "revo-grid": RevoGrid;
        "revogr-clipboard": RevogrClipboard;
        "revogr-data": RevogrData;
        "revogr-edit": RevogrEdit;
        "revogr-filter-panel": RevogrFilterPanel;
        "revogr-focus": RevogrFocus;
        "revogr-header": RevogrHeader;
        "revogr-order-editor": RevogrOrderEditor;
        "revogr-overlay-selection": RevogrOverlaySelection;
        "revogr-scroll-virtual": RevogrScrollVirtual;
        "revogr-temp-range": RevogrTempRange;
        "revogr-viewport": RevogrViewport;
        "revogr-viewport-scroll": RevogrViewportScroll;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "revo-grid": LocalJSX.RevoGrid & JSXBase.HTMLAttributes<HTMLRevoGridElement>;
            "revogr-clipboard": LocalJSX.RevogrClipboard & JSXBase.HTMLAttributes<HTMLRevogrClipboardElement>;
            "revogr-data": LocalJSX.RevogrData & JSXBase.HTMLAttributes<HTMLRevogrDataElement>;
            "revogr-edit": LocalJSX.RevogrEdit & JSXBase.HTMLAttributes<HTMLRevogrEditElement>;
            "revogr-filter-panel": LocalJSX.RevogrFilterPanel & JSXBase.HTMLAttributes<HTMLRevogrFilterPanelElement>;
            "revogr-focus": LocalJSX.RevogrFocus & JSXBase.HTMLAttributes<HTMLRevogrFocusElement>;
            "revogr-header": LocalJSX.RevogrHeader & JSXBase.HTMLAttributes<HTMLRevogrHeaderElement>;
            "revogr-order-editor": LocalJSX.RevogrOrderEditor & JSXBase.HTMLAttributes<HTMLRevogrOrderEditorElement>;
            "revogr-overlay-selection": LocalJSX.RevogrOverlaySelection & JSXBase.HTMLAttributes<HTMLRevogrOverlaySelectionElement>;
            "revogr-scroll-virtual": LocalJSX.RevogrScrollVirtual & JSXBase.HTMLAttributes<HTMLRevogrScrollVirtualElement>;
            "revogr-temp-range": LocalJSX.RevogrTempRange & JSXBase.HTMLAttributes<HTMLRevogrTempRangeElement>;
            "revogr-viewport": LocalJSX.RevogrViewport & JSXBase.HTMLAttributes<HTMLRevogrViewportElement>;
            "revogr-viewport-scroll": LocalJSX.RevogrViewportScroll & JSXBase.HTMLAttributes<HTMLRevogrViewportScrollElement>;
        }
    }
}
