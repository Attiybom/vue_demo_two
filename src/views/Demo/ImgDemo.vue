<template>
  <div class="img">
    <TextImageComponent :display-text="text" :url="url" :url-list="imgList" />
  </div>
</template>

<script>
import TextImageComponent from "../../components/TextImageComponent";
export default {
  components: {
    TextImageComponent,
  },
  data() {
    return {
      url: 'https://th.bing.com/th/id/R.6b5df1bfe0e4778a44dba0753cd169c8?rik=QRQIMqvjWRCO5Q&riu=http%3a%2f%2fpic39.nipic.com%2f20140321%2f8857347_232251363165_2.jpg&ehk=7oAaMo6LCHJc%2bqpQ0IPvcH7v69jGRQhb2vDz%2fOd5720%3d&risl=&pid=ImgRaw&r=0',
      imgList: [
        'https://th.bing.com/th/id/R.6b5df1bfe0e4778a44dba0753cd169c8?rik=QRQIMqvjWRCO5Q&riu=http%3a%2f%2fpic39.nipic.com%2f20140321%2f8857347_232251363165_2.jpg&ehk=7oAaMo6LCHJc%2bqpQ0IPvcH7v69jGRQhb2vDz%2fOd5720%3d&risl=&pid=ImgRaw&r=0',
      ],
      text: '外部文字传入',
    };
  },
  methods: {

  },
};
</script>

<style scoped></style>
