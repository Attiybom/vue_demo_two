<template>
  <div class="img">
    <template v-for="(item) in textImgList" >
      <TextImageComponent :key="item.text" :display-text="item.text" :url="item.url" :url-list="item.urlList" />
    </template>
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
      textImgList: [
        {
          url: 'https://th.bing.com/th/id/R.6b5df1bfe0e4778a44dba0753cd169c8?rik=QRQIMqvjWRCO5Q&riu=http%3a%2f%2fpic39.nipic.com%2f20140321%2f8857347_232251363165_2.jpg&ehk=7oAaMo6LCHJc%2bqpQ0IPvcH7v69jGRQhb2vDz%2fOd5720%3d&risl=&pid=ImgRaw&r=0',
          urlList: [
            'https://th.bing.com/th/id/R.6b5df1bfe0e4778a44dba0753cd169c8?rik=QRQIMqvjWRCO5Q&riu=http%3a%2f%2fpic39.nipic.com%2f20140321%2f8857347_232251363165_2.jpg&ehk=7oAaMo6LCHJc%2bqpQ0IPvcH7v69jGRQhb2vDz%2fOd5720%3d&risl=&pid=ImgRaw&r=0',
          ],
          text: '查看图片1的问题',
        },
        {
          url: 'https://th.bing.com/th/id/R.3a150e84f6f37442d322de9063d7d5d0?rik=66Knyge4S1PICQ&pid=ImgRaw&r=0',
          urlList: [
            'https://th.bing.com/th/id/R.3a150e84f6f37442d322de9063d7d5d0?rik=66Knyge4S1PICQ&pid=ImgRaw&r=0',
          ],
          text: '查看图片2的问题',
        },
      ]
    };
  },
  methods: {

  },
};
</script>

<style scoped></style>
