<script>
import { getRowIdentify } from './util'

export default {
    name: 'TableBody',
    props: {
        tableData: Array,
        option: Object,
    },
    data() {
        return {
        }
    },
    watch: {},
    computed: {
        table() {
            return this.$parent
        },
    },
    render(h) {
        return <table class="table-body">
            <tbody>
                {
                    tableData.reduce((acc, row) => {
                        return acc.concat(this.wrappedRowRender(row, acc.length))
                    }, [])
                }
            </tbody>
        </table >
    },
    methods: {
        wrappedRowRender(row, $index) {
            if (1 == 2) {
                // 展开
            } else {
                this.rowRender(row, $index)
            }
        },
        rowRender(row, $index) {
            const { columns } = this.option
            return <tr class="row body-row" key={this.getRowKey(row, $index)}>
                {
                    columns.map((column, columnIndex) => {
                        return <td
                            style={getCellStyle($index, columnIndex, row, column)}
                            class={getCellClass($index, columnIndex, row, column)}
                        >
                            <div>{row[column]}</div>
                        </td>
                    })
                }
            </tr>
        },
        getRowKey(row, $index) {
            const rowKey = this.table.rowKey
            if (rowKey) {
                return getRowIdentify(row, rowKey)
            } else {
                return $index
            }
        },
        getCellStyle(rowIndex, columnIndex, row, column) {
            const cellStyle = this.table.cellStyle
            if (typeof cellStyle === 'function') {
                return cellStyle.call(null, { rowIndex, columnIndex, row, column })
            }
            return cellStyle
        },
        getCellClass(rowIndex, columnIndex, row, column) {
            const cellClassName = this.table.cellClassName
            const classes = [column.id, column.align, column.className]
            if (typeof cellClassName === 'string') {
                classes.push(cellClassName)
            } else if (typeof cellClassName === 'function') {
                classes.push(cellClassName.call(null, { rowIndex, columnIndex, row, column }))
            }
            return classes.join(' ')
        }
    },
}
</script>