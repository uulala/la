<script>
export default {
    name: 'TableFooter',
    props: {
        tableData: Array,
        option: Object,
    },
    data() {
        return {}
    },
    watch: {},
    computed: {
        table() {
            return this.$parent
        },
    },
    render(h) {
        return <table class="table-footer">
            <tfoot>
                {
                    option.columns.map((column, cellIndex) => <td
                        style={this.getHeaderCellStyle(rowIndex, cellIndex, columns, column)}
                        class={this.getHeaderCellClass(rowIndex, cellIndex, columns, column)}
                    >
                        <div class={['cell', column.labelClassName]}>
                            {column.renderHeader
                                ? column.renderHeader(this._renderProxy, h, { column, $index: cellIndex, store: this.store, _self: this.$parent.$vnode.context })
                                : column.label}
                        </div>
                    </td>)
                }
            </tfoot>
        </table>
    },
    methods: {
        getHeaderCellStyle(rowIndex, columnIndex, row, column) {
            const headerCellStyle = this.table.headerCellStyle;
            if (typeof headerCellStyle === 'function') {
                return headerCellStyle.call(null, {
                    rowIndex,
                    columnIndex,
                    row,
                    column
                });
            }
            return headerCellStyle;
        },
        getHeaderCellClass(rowIndex, columnIndex, row, column) {
            const classes = [column.id, column.order, column.headerAlign, column.className, column.labelClassName];

            const headerCellClassName = this.table.headerCellClassName;
            if (typeof headerCellClassName === 'string') {
                classes.push(headerCellClassName);
            } else if (typeof headerCellClassName === 'function') {
                classes.push(headerCellClassName.call(null, {
                    rowIndex,
                    columnIndex,
                    row,
                    column
                }));
            }

            return classes.join(' ');
        },
    }
}
</script>