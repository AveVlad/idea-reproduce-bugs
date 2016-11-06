import React, { Component } from 'react';


function mappet(schema) {
    return () => {
        return schema;
    };
}

/**
 * Enter on 21 line
 */
export function withComment() {
    const schema = [
        ['original_language', 'language'],
        /**
         * <TimeType>
         */
        ['time_min_value', `dataMap.minValue`],
        ['time_max_value', `dataMap.maxValue`],
    ];
    console.log(123);
    mappet(schema);
}

export function withoutComment() {
    const schema = [
        ['original_language', 'language'],
        ['time_min_value', `dataMap.minValue`],
        ['time_max_value', `dataMap.maxValue`],
    ];

    mappet(schema);
}
