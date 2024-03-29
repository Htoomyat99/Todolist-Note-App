import {View, Text, ToastAndroid} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//components
import NoteContent from '../../components/Note/NoteContent/NoteContent';
import NoteModal from '../../components/NoteModal/NoteModal';
import * as actionText from '../../store/action/Task';

const Note = () => {
  const [showNoteModal, setNoteShowModal] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [title, setTitle] = useState('');
  const [para, setPara] = useState('');
  const [date, setDate] = useState(new Date());

  const dispatch = useDispatch();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const dateString = `${day}-${month}-${year}`;

  let NoteData = {
    id: 1,
    title: title,
    para: para,
    date: dateString,
  };

  const addHandler = () => {
    setNoteShowModal(true);
    setShowIcon(false);
  };

  const cancelHandler = () => {
    setShowIcon(true);
    setNoteShowModal(false);
  };

  const addNoteHandler = () => {
    if (NoteData.title && NoteData.para) {
      setShowIcon(true);
      setNoteShowModal(false);
      setTitle('');
      setPara('');
      dispatch(actionText.createText(NoteData));
    } else {
      ToastAndroid.show('Please fill the input fields', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{flex: 1}}>
      <NoteContent addNote={addHandler} showIcon={showIcon} />
      {showNoteModal && (
        <NoteModal
          cancel={cancelHandler}
          title={title}
          onChangeTitle={value => setTitle(value)}
          para={para}
          onChangePara={value => setPara(value)}
          addNote={addNoteHandler}
          date={date}
        />
      )}
    </View>
  );
};

export default Note;
