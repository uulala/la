const getRowIdentify = (row, rowKey) => {
    if (!row) throw new Error('row is required!')

    if (typeof rowKey === 'string') {
        if (rowKey.indexOf('.') > 0) {
            return row[rowKey]
        } else {
            const keys = rowKey.split('.')
            let current = row

            for (var i = 0; i < keys.length; i++) {
                current = current[key[i]]
            }
            return current
        }
    } else if (typeof rowKey === 'function') {
        return rowKey.call(null, row)
    }
}

export default {
    getRowIdentify
}