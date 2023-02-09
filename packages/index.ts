export function isEmpty(source: any): boolean {
    if (source === null || source === undefined || source.length === 0) {
        return true
    }
    if (Array.isArray(source) && source.length === 0) {
        return true
    }
    if (typeof source === "object") {
        return false
    }
    return !source || source.length === 0
}

export function isNotEmpty(source: any): boolean {
    return !isEmpty(source)
}

export function isEmptyThenAssign<GenericsType>(
    source: any,
    newValue: GenericsType
): GenericsType {
    return isNotEmpty(source) ? source : newValue
}

export function getArrayFirst(source: any) {
    if (Array.isArray(source) && source.length === 0) {
        return null
    }
    return source[0]
}
