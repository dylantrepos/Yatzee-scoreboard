import React from 'react';
import {Text} from 'react-native';
import { getClass } from '../../helpers/retreiveClasses';
import styleSheet from './styles';

export default ({children, classTxt}) => {
    const styleText = getClass(styleSheet, ['text', classTxt ?? '']);
    return (
        <Text style={styleText}>{children}</Text>
    );
}
