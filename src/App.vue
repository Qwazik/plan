<template>
  <v-app id="inspire">
    <v-navigation-drawer
            v-model="drawer"
            app
            clipped
            left
    >
      <v-list dense>
        <v-list-item @click.stop="left = !left">
          <v-list-item-content>
            <v-list-item-title>Книги</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-group
                value="false"
        >
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Tools</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-item
                  link
          >
            <v-list-item-title>
              Проверка ссылок
            </v-list-item-title>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
            app
            clipped-left
            color="blue-grey"
            dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Toolbar</v-toolbar-title>
      <div class="flex-grow-1"></div>
    </v-app-bar>

    <v-content>
      <v-container
              fluid
      >
        <v-row
                justify="start"
                align="start"
        >
          <v-col>
            <ul class="mb-10">
              <li v-for="(book, key) in books">
                {{ book.name }} - {{ book.page }}
                <button @click="removeBook(book)">x</button>
              </li>
            </ul>

            <input type="text" v-model="newBook.name">
            <input type="text" v-model="newBook.page">

            <p>
              {{newBook}}
            </p>

            <v-btn @click="addBook">Добавить</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  import {booksCollection, db} from './db'

  export default {
    data: () => ({
      drawer: true,
      books: [],
      newBook: {
        name: null,
        page: null
      }
    }),
    firestore: {
      books: booksCollection
    },
    methods: {
      addBook(){
        booksCollection.add({
          name: this.newBook.name,
          page: this.newBook.page
        })
      },
      removeBook(item){
        booksCollection.doc(item.id).delete();
      }
    }
  }
</script>