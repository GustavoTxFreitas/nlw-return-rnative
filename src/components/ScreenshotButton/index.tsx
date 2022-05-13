import React from 'react';
import { TouchableOpacity, Image, View } from 'react-native';
import { Camera, Trash } from 'phosphor-react-native';

import { theme } from '../../theme';
import { styles } from './styles';

interface Props {
    screenshot: string | null;
    onTakeShot: () => void;
    onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: Props) {
    return (
        <TouchableOpacity style={styles.container}>
            {
                screenshot
                    ? <View>
                        <Image
                            style={styles.image}
                            source={{ uri: screenshot }} />
                        <Trash
                            size={22}
                            weight='fill'
                            style={styles.removeIcon}
                            color={theme.colors.text_secondary} />
                    </View>
                    : <Camera
                        size={24}
                        weight='bold'
                        color={theme.colors.text_secondary} />
            }
        </TouchableOpacity>
    );
}