/**
 * Created by hastings on 10/05/2017.
 */
var d3 = require("d3");
export const arc = (...arr)=> {
    let stAgArray = arr[0], edAgArray = arr[1], iArray = arr[2], oArray = arr[3];
    if (arr.length == 1) {
        let rtArray = [];
        for (let i = 0; i < arr[0].length; i++) {
            let {startAngle, endAngle, inner, outer} = arr[0][i];
            let a = d3.arc()
                .innerRadius(inner)
                .outerRadius(outer)
                .startAngle(startAngle)
                .endAngle(endAngle);
            rtArray.push(a());
        }
        return rtArray;
    } else if (stAgArray && edAgArray && iArray && oArray && iArray.length && oArray.length && stAgArray.length && edAgArray.length) {
        const length = Math.min(Math.min(iArray.length, oArray.length), Math.min(stAgArray.length, edAgArray.length));
        let rtArray = [];
        for (let i = 0; i < length; i++) {
            let a = d3.arc()
                .innerRadius(iArray[i])
                .outerRadius(oArray[i])
                .startAngle(stAgArray[i])
                .endAngle(edAgArray[i]);
            rtArray.push(a());
        }
        return rtArray;
    } else
        return [d3.arc()];
};

export const colors20 = d3.schemeCategory20c;

export const scaleArc = (arr, base = 2 * Math.PI, gap = 10, startAt = 0)=> {
    let a = [];

    if (arr.length > 0) {
        let max_val = d3.max(arr, (o)=>(o));
        let scale = d3.scaleLinear().domain([0, max_val]).range([0, base]);
        arr.forEach((d, i)=> {
            a.push({
                startAngle: startAt,
                endAngle: scale(d),
                inner: (i + 1) * gap,
                outer: (i + 2) * gap
            });
        });
    }
    return a;
};

export const scalePie = (data, stAg = -0.5 * Math.PI, edAg = 0.5 * Math.PI, pad = 0.05, val = function (v) {
    return v;
}, sort = function (v1, v2) {
    return v1 - v2;
})=> {
    return d3.pie().startAngle(stAg).endAngle(edAg).padAngle(pad).sort(sort).value(val)(data);
};

export const pie = (arr, iRadius = 20, oRadius = 100, base = 5)=>{
    if (typeof arr != "object" || !arr.length){
        throw new Error("Missing Arguments in pie() Error!");
    }
    arr.forEach((d,i)=>{
        d.inner = iRadius;
        d.outer = oRadius;
    });
    return arc(arr);
};