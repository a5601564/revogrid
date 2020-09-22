/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { Edition, RevoGrid, Selection } from "./interfaces";
import { ObservableMap } from "@stencil/store";
import { DataSourceState, Groups } from "./store/dataSource/data.store";
export namespace Components {
    interface RevoGrid {
        /**
          * Indicates default column size.
         */
        "colSize": number;
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns": (RevoGrid.ColumnRegular|RevoGrid.ColumnGrouping)[];
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize": number;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource": RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource": RevoGrid.DataType[];
        /**
          * When true, user can range selection.
         */
        "range": boolean;
        /**
          * When true, grid in read only mode.
         */
        "readonly": boolean;
        /**
          * When true, columns are resizable.
         */
        "resize": boolean;
        /**
          * Indicates default row size.
         */
        "rowSize": number;
        /**
          * Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop
         */
        "source": RevoGrid.DataType[];
        /**
          * Theme name
         */
        "theme": 'default'|'material';
    }
    interface RevogrData {
        "canDrag": boolean;
        "colData": RevoGrid.ColumnRegular[];
        "cols": RevoGrid.VirtualPositionItem[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        "range": boolean;
        "readonly": boolean;
        "rows": RevoGrid.VirtualPositionItem[];
    }
    interface RevogrEdit {
        "column": RevoGrid.ColumnRegular|null;
        "editCell": Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor": Edition.EditorCtr|null;
    }
    interface RevogrHeader {
        "canResize": boolean;
        "colData": RevoGrid.ColumnRegular[];
        "cols": RevoGrid.VirtualPositionItem[];
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "groupingDepth": number;
        "groups": Groups;
        "parent": string;
    }
    interface RevogrOrderEditor {
        "clearOrder": () => Promise<void>;
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dragStart": (e: MouseEvent) => Promise<void>;
        "endOrder": (e: MouseEvent) => Promise<void>;
        "parent": HTMLElement;
    }
    interface RevogrOverlaySelection {
        "canDrag": boolean;
        "colData": RevoGrid.ColumnRegular[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore": ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol": ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow": ObservableMap<RevoGrid.DimensionSettingsState>;
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
        "selectionStore": ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrScrollVirtual {
        "contentSize": number;
        "dimension": RevoGrid.DimensionType;
        "setScroll": (e: RevoGrid.ViewPortScrollEvent) => Promise<void>;
        "virtualSize": number;
    }
    interface RevogrViewport {
        "columnStores": {[T in RevoGrid.DimensionCols]: ObservableMap<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>};
        "dimensions": {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.DimensionSettingsState>};
        /**
          * Custom editors register
         */
        "editors": Edition.Editors;
        "range": boolean;
        "readonly": boolean;
        "resize": boolean;
        "rowStores": {[T in RevoGrid.DimensionRows]: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>};
        "uuid": string|null;
        "viewports": {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.ViewportState>};
    }
    interface RevogrViewportScroll {
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
        "revogr-data": HTMLRevogrDataElement;
        "revogr-edit": HTMLRevogrEditElement;
        "revogr-header": HTMLRevogrHeaderElement;
        "revogr-order-editor": HTMLRevogrOrderEditorElement;
        "revogr-overlay-selection": HTMLRevogrOverlaySelectionElement;
        "revogr-scroll-virtual": HTMLRevogrScrollVirtualElement;
        "revogr-viewport": HTMLRevogrViewportElement;
        "revogr-viewport-scroll": HTMLRevogrViewportScrollElement;
    }
}
declare namespace LocalJSX {
    interface RevoGrid {
        /**
          * Indicates default column size.
         */
        "colSize"?: number;
        /**
          * Columns - defines an array of grid columns. Can be column or grouped column.
         */
        "columns"?: (RevoGrid.ColumnRegular|RevoGrid.ColumnGrouping)[];
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Defines how many rows/columns should be rendered outside visible area.
         */
        "frameSize"?: number;
        /**
          * After edit. Triggered when after data applied.
         */
        "onAfterEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before autofill. Triggered before autofill applied. Use e.preventDefault() to prevent edit data apply.
         */
        "onBeforeAutofill"?: (event: CustomEvent<{
    newRange: {start: Selection.Cell; end: Selection.Cell;};
    oldRange: {start: Selection.Cell; end: Selection.Cell;};
  }>) => void;
        /**
          * Before edit event. Triggered before edit data applied. Use e.preventDefault() to prevent edit data set and use you own.  Use e.val = {your value} to replace edit result with your own.
         */
        "onBeforeEdit"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        /**
          * Before range apply. Triggered before range applied. Use e.preventDefault() to prevent range.
         */
        "onBeforeRange"?: (event: CustomEvent<{
    newRange: {start: Selection.Cell; end: Selection.Cell;};
    oldRange: {start: Selection.Cell; end: Selection.Cell;};
  }>) => void;
        /**
          * On header click.
         */
        "onHeaderClick"?: (event: CustomEvent<RevoGrid.ColumnRegular>) => void;
        /**
          * Before row order apply. Use e.preventDefault() to prevent row order change.
         */
        "onRowOrderChanged"?: (event: CustomEvent<{from: number; to: number;}>) => void;
        /**
          * Pinned bottom Source: {[T in ColumnProp]: any} - defines pinned bottom rows data source.
         */
        "pinnedBottomSource"?: RevoGrid.DataType[];
        /**
          * Pinned top Source: {[T in ColumnProp]: any} - defines pinned top rows data source.
         */
        "pinnedTopSource"?: RevoGrid.DataType[];
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
          * Indicates default row size.
         */
        "rowSize"?: number;
        /**
          * Source - defines main data source. Can be an Object or 2 dimensional array([][]); Keys/indexes referenced from columns Prop
         */
        "source"?: RevoGrid.DataType[];
        /**
          * Theme name
         */
        "theme"?: 'default'|'material';
    }
    interface RevogrData {
        "canDrag"?: boolean;
        "colData"?: RevoGrid.ColumnRegular[];
        "cols"?: RevoGrid.VirtualPositionItem[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "onDragStartCell"?: (event: CustomEvent<MouseEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "rows"?: RevoGrid.VirtualPositionItem[];
    }
    interface RevogrEdit {
        "column"?: RevoGrid.ColumnRegular|null;
        "editCell"?: Edition.EditCell;
        /**
          * Custom editors register
         */
        "editor"?: Edition.EditorCtr|null;
        "onCellEdit"?: (event: CustomEvent<Edition.SaveDataDetails>) => void;
        /**
          * Close editor event
         */
        "onCloseEdit"?: (event: CustomEvent<any>) => void;
    }
    interface RevogrHeader {
        "canResize"?: boolean;
        "colData"?: RevoGrid.ColumnRegular[];
        "cols"?: RevoGrid.VirtualPositionItem[];
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "groupingDepth"?: number;
        "groups"?: Groups;
        "onHeaderResize"?: (event: CustomEvent<RevoGrid.ViewSettingSizeProp>) => void;
        "onInitialHeaderClick"?: (event: CustomEvent<{column: RevoGrid.ColumnRegular, index: number}>) => void;
        "parent"?: string;
    }
    interface RevogrOrderEditor {
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Row dragged, new range ready to be applied
         */
        "onInitialRowDropped"?: (event: CustomEvent<{from: number; to: number;}>) => void;
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
		cell: Selection.Cell, text: string, pos: RevoGrid.PositionItem}>) => void;
        "parent"?: HTMLElement;
    }
    interface RevogrOverlaySelection {
        "canDrag"?: boolean;
        "colData"?: RevoGrid.ColumnRegular[];
        /**
          * Static stores, not expected to change during component lifetime
         */
        "dataStore"?: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>;
        "dimensionCol"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        "dimensionRow"?: ObservableMap<RevoGrid.DimensionSettingsState>;
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        /**
          * Last cell position
         */
        "lastCell"?: Selection.Cell;
        "onCellEditInitiate"?: (event: CustomEvent<Edition.BeforeSaveDataDetails>) => void;
        "onChangeSelection"?: (event: CustomEvent<{changes: Partial<Selection.Cell>; isMulti?: boolean; }>) => void;
        "onFocusCell"?: (event: CustomEvent<{focus: Selection.Cell; end: Selection.Cell; }>) => void;
        /**
          * Selection range changed
         */
        "onInitialSelectionChanged"?: (event: CustomEvent<Selection.ChangedRange>) => void;
        "onSetEdit"?: (event: CustomEvent<string|boolean>) => void;
        "onUnregister"?: (event: CustomEvent<any>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        /**
          * Dynamic stores
         */
        "selectionStore"?: ObservableMap<Selection.SelectionStoreState>;
    }
    interface RevogrScrollVirtual {
        "contentSize"?: number;
        "dimension"?: RevoGrid.DimensionType;
        "onScrollVirtual"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "virtualSize"?: number;
    }
    interface RevogrViewport {
        "columnStores"?: {[T in RevoGrid.DimensionCols]: ObservableMap<DataSourceState<RevoGrid.ColumnRegular, RevoGrid.DimensionCols>>};
        "dimensions"?: {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.DimensionSettingsState>};
        /**
          * Custom editors register
         */
        "editors"?: Edition.Editors;
        "onSetDimensionSize"?: (event: CustomEvent<{type: RevoGrid.MultiDimensionType, sizes: RevoGrid.ViewSettingSizeProp}>) => void;
        "onSetViewportCoordinate"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
        "onSetViewportSize"?: (event: CustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "range"?: boolean;
        "readonly"?: boolean;
        "resize"?: boolean;
        "rowStores"?: {[T in RevoGrid.DimensionRows]: ObservableMap<DataSourceState<RevoGrid.DataType, RevoGrid.DimensionRows>>};
        "uuid"?: string|null;
        "viewports"?: {[T in RevoGrid.MultiDimensionType]: ObservableMap<RevoGrid.ViewportState>};
    }
    interface RevogrViewportScroll {
        "contentHeight"?: number;
        "contentWidth"?: number;
        "onResizeViewport"?: (event: CustomEvent<RevoGrid.ViewPortResizeEvent>) => void;
        "onScrollViewport"?: (event: CustomEvent<RevoGrid.ViewPortScrollEvent>) => void;
    }
    interface IntrinsicElements {
        "revo-grid": RevoGrid;
        "revogr-data": RevogrData;
        "revogr-edit": RevogrEdit;
        "revogr-header": RevogrHeader;
        "revogr-order-editor": RevogrOrderEditor;
        "revogr-overlay-selection": RevogrOverlaySelection;
        "revogr-scroll-virtual": RevogrScrollVirtual;
        "revogr-viewport": RevogrViewport;
        "revogr-viewport-scroll": RevogrViewportScroll;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "revo-grid": LocalJSX.RevoGrid & JSXBase.HTMLAttributes<HTMLRevoGridElement>;
            "revogr-data": LocalJSX.RevogrData & JSXBase.HTMLAttributes<HTMLRevogrDataElement>;
            "revogr-edit": LocalJSX.RevogrEdit & JSXBase.HTMLAttributes<HTMLRevogrEditElement>;
            "revogr-header": LocalJSX.RevogrHeader & JSXBase.HTMLAttributes<HTMLRevogrHeaderElement>;
            "revogr-order-editor": LocalJSX.RevogrOrderEditor & JSXBase.HTMLAttributes<HTMLRevogrOrderEditorElement>;
            "revogr-overlay-selection": LocalJSX.RevogrOverlaySelection & JSXBase.HTMLAttributes<HTMLRevogrOverlaySelectionElement>;
            "revogr-scroll-virtual": LocalJSX.RevogrScrollVirtual & JSXBase.HTMLAttributes<HTMLRevogrScrollVirtualElement>;
            "revogr-viewport": LocalJSX.RevogrViewport & JSXBase.HTMLAttributes<HTMLRevogrViewportElement>;
            "revogr-viewport-scroll": LocalJSX.RevogrViewportScroll & JSXBase.HTMLAttributes<HTMLRevogrViewportScrollElement>;
        }
    }
}
