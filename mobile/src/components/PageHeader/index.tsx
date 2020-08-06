import React from 'react';
import PropTypes from 'prop-types';
import { View, Image, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import backIcon from '../../assets/images/icons/back.png';
import logo from '../../assets/images/logo.png';

import styles from './styles';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title }) => {
  const { navigate } = useNavigation();

  const handleGoBack = () => {
    navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain" />
        </BorderlessButton>

        <Image source={logo} resizeMode="contain" />
      </View>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageHeader;
