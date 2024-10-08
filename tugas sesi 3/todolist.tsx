import React, {useState} from 'react';
import {
  Alert,
  Text,
  View,
  TextInput,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

const TodoList = () => {
  const [title, setTitle] = useState<string>(''); // State untuk menyimpan input dari TextInput
  const [todoList, setTodoList] = useState<any[]>([
    {
      id: 1,
      title: 'Todo 1',
      completed: false,
    },
  ]);
  const [editingId, setEditingId] = useState<number | null>(null); // State untuk melacak item todo yang sedang diedit

  // Fungsi untuk menambahkan atau mengedit item todo
  const handleAddOrEditTodo = () => {
    if (!title) {
      Alert.alert('Error', 'Masukkan todo Anda'); // Menampilkan pesan error jika input kosong
      return;
    }

    if (editingId !== null) {
      // Jika sedang mengedit todo (editingId tidak null)
      const updatedTodos = todoList.map(
        todo => (todo.id === editingId ? {...todo, title: title} : todo), // Update todo yang sedang diedit
      );
      setTodoList(updatedTodos); // Memperbarui daftar todo dengan perubahan
      setEditingId(null); // Reset editingId setelah selesai mengedit
    } else {
      // Jika menambahkan todo baru (editingId null)
      const newTodo = {
        id: todoList.length + 1,
        title: title,
        completed: false,
      };
      setTodoList([...todoList, newTodo]); // Tambahkan todo baru ke daftar
    }

    setTitle(''); // Mengosongkan input setelah menambah atau mengedit
  };

  // Fungsi untuk mengedit todo
  const handleEditTodo = (id: number, currentTitle: string) => {
    setEditingId(id); // Set ID todo yang sedang diedit
    setTitle(currentTitle); // Isi TextInput dengan judul todo yang dipilih untuk diedit
  };

  // Fungsi untuk menghapus todo
  const handleDeleteTodo = (id: number) => {
    // Filter daftar todo untuk menghapus item dengan ID yang sesuai
    const updatedTodos = todoList.filter(todo => todo.id !== id);
    setTodoList(updatedTodos); // Memperbarui daftar todo tanpa item yang dihapus
  };

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 20,
        backgroundColor: '#f0f0f0',
      }}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
          textAlign: 'center',
        }}>
        Daftar Todo
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: 20,
        }}>
        <TextInput
          placeholder="Masukkan Todo"
          style={{
            flex: 1,
            borderColor: '#ccc',
            borderWidth: 1,
            borderRadius: 8,
            padding: 10,
            backgroundColor: '#fff',
          }}
          value={title}
          onChangeText={text => setTitle(text)}
        />
        <Pressable
          style={{
            backgroundColor: editingId !== null ? 'orange' : 'blue',
            paddingVertical: 12,
            paddingHorizontal: 20,
            borderRadius: 8,
            marginLeft: 10,
          }}
          onPress={handleAddOrEditTodo}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>
            {editingId !== null ? 'Edit' : 'Tambah'}
          </Text>
        </Pressable>
      </View>

      <ScrollView>
        {todoList.map(item => (
          <View
            key={item.id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#fff',
              padding: 15,
              borderRadius: 8,
              marginBottom: 10,
              shadowColor: '#000',
              shadowOffset: {width: 0, height: 2},
              shadowOpacity: 0.1,
              shadowRadius: 3,
              elevation: 3,
            }}>
            <Text
              style={{
                fontSize: 18,
                color: '#333',
                flex: 1,
              }}>
              {item.title}
            </Text>

            {/* Tombol Edit */}
            <TouchableOpacity
              style={{
                backgroundColor: 'orange',
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 5,
                marginRight: 5,
              }}
              // Saat tombol "Edit" ditekan, isi input dengan judul todo yang dipilih untuk diedit
              onPress={() => handleEditTodo(item.id, item.title)}>
              <Text style={{color: 'white'}}>Edit</Text>
            </TouchableOpacity>

            {/* Tombol Delete */}
            <TouchableOpacity
              style={{
                backgroundColor: 'red',
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 5,
              }}
              // Saat tombol "Delete" ditekan, hapus todo dari daftar
              onPress={() => handleDeleteTodo(item.id)}>
              <Text style={{color: 'white'}}>Hapus</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default TodoList;
