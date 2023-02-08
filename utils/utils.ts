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

// 調整日期顯示格式
export function getNewDate(source: any) {
    Date.prototype.format = function (format) {
        var o = {
            "M+": this.getMonth() + 1, //month
            "d+": this.getDate(), //day
            "h+": this.getHours(), //hour
            "m+": this.getMinutes(), //minute
            "s+": this.getSeconds(), //second
            "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
            S: this.getMilliseconds(), //millisecond
        }
        if (/(y+)/.test(format))
            format = format.replace(
                RegExp.$1,
                (this.getFullYear() + "").substr(4 - RegExp.$1.length)
            )
        for (var k in o)
            if (new RegExp("(" + k + ")").test(format))
                format = format.replace(
                    RegExp.$1,
                    RegExp.$1.length == 1
                        ? o[k]
                        : ("00" + o[k]).substr(("" + o[k]).length)
                )
        return format
    }
    return new Date(source).format("yyyy-MM-dd")
}

// 分頁 > showDelta(2) 會以...顯示
export function pagination(c, m) {
    const pageCurrent = c
    const PageLast = m
    const showDelta = 2
    const showLeft = pageCurrent - showDelta
    const showRight = pageCurrent + showDelta + 1
    const rangePage = []
    const rangeWithDots = []

    for (let i = 1; i <= PageLast; i++) {
        if (i == 1 || i == PageLast || (i >= showLeft && i < showRight)) {
            rangePage.push(i)
        }
    }

    let l
    for (let i of rangePage) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1)
            } else if (i - l !== 1) {
                rangeWithDots.push("...")
            }
        }
        rangeWithDots.push(i)
        l = i
    }

    return rangeWithDots
}
