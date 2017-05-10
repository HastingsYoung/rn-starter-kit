/**
 * Created by hastings on 10/05/2017.
 */
var d3 = require("d3");
export const arc = (stAgArray, edAgArray, iArray, oArray)=> {
    if (iArray.length && oArray.length && stAgArray.length && edAgArray.length) {
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
    let b = [];
    let m = [];
    let n = [];

    if (arr.length > 0) {
        let max_val = d3.max(arr, (o)=>(o));
        let scale = d3.scaleLinear().domain([0, max_val]).range([0, base]);
        arr.forEach((d, i)=> {
            a.push(startAt);
            b.push(scale(d));
            m.push((i + 1) * gap);
            n.push((i + 2) * gap);
        });
    }
    return {
        startAngle: a,
        endAngle: b,
        inner: m,
        outer: n,
    };
};