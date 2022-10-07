import React from 'react';
import { Pressable} from 'react-native';
import { getClass } from '../../helpers/retreiveClasses';
import Text from '../text/Text';
import styleSheet from './styles';

const Button = ({ action, children, classBtn, classTxt}) => {
    const styleButton = getClass(styleSheet, ['button', 'text', classBtn ?? '']);
    const styleText = getClass(styleSheet, ['text', classTxt ?? '']);
    return (
        <Pressable style={styleButton} onPress={action}>
            <Text style={styleText}>{children}</Text>
        </Pressable>
    );
}

export default Button;
