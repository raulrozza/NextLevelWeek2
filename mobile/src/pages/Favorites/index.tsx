import React, { useState } from 'react';
import { View, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { ITeacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {
  const [teachers, setTeachers] = useState<ITeacher[]>([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites')
      .then(response => {
        if (response) return JSON.parse(response);
        else return [];
      })
      .then((teachers: ITeacher[]) => setTeachers(teachers))
      .catch(error => console.error(error));
  });

  return (
    <View style={styles.container}>
      <PageHeader title="Meus Proffies favoritos" />

      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        {teachers.map(teacher => (
          <TeacherItem key={teacher.id} teacher={teacher} favorited />
        ))}
      </ScrollView>
    </View>
  );
};

export default Favorites;
