<template>
  <div>
    <div class="min-h-screen main-bg d-flex flex-column justify-content-around">
      <div class="text-center text-1 text-conclusion">
        <p class="text-1">
          ทั้งหมดนี้ เราเพียงอยากชวนคุณดูเรื่องใกล้ตัวอย่าง "หนังสือ"
          ผ่านชุดข้อมูลเมื่อหนังสือหลายๆ เล่มมาอยู่รวมกัน หนังสือหนึ่งเล่ม
          อาจบอกเล่าได้หลายเรื่องราว ยิ่งหนังสือหลายเล่ม
          ก็ทำให้เราเห็นเทรนด์หรือเรื่องราวที่ต่างออกไป
        </p>
        <p class="text-3">
          One book tells so many stories, while many books tells more. This data
          story just wants to reveals some new insights when many books come
          together.
        </p>

        <div class="mt-5">
          <p class="text-1 font-weight-bold">
            แล้วคุณล่ะ.. ในปี 2021 ที่ผ่านมานี้ ได้ค้นหาเรื่องราวใหม่ๆ
            ผ่านการอ่านหนังสือไปกี่เล่มบ้าง?
          </p>
          <p class="text-3">
            What's about yours? How many books have you read to discover new
            stories in this 2021?
          </p>
        </div>
      </div>
      <div class="share-section mt-5">
        <p class="text-1 font-weight-bold">แชร์ไปขิงเพื่อน</p>

        <div class="d-flex justify-content-center mt-3">
          <!-- <img
            :src="social_fb"
            class="sharer social-icon pointer mx-1"
            alt=""
            v-sharer
            data-sharer="facebook"
            :data-url="`https://projects.punchup.world/booksonshelf/ogimage/${count_fiction}-${count_nonfiction}`"
          />
          <img
            :src="social_twitter"
            class="sharer social-icon pointer mx-1"
            alt=""
            v-sharer
            data-sharer="twitter"
            :data-url="`https://projects.punchup.world/booksonshelf/ogimage/${count_fiction}-${count_nonfiction}`"
          />
          <img
            :src="social_line"
            class="sharer social-icon pointer mx-1"
            alt=""
            v-sharer
            data-sharer="line"
            :data-url="`https://projects.punchup.world/booksonshelf/ogimage/${count_fiction}-${count_nonfiction}`"
          /> -->
        </div>
      </div>
      <div class="mt-5 position-relative">
        <img class="w-100" :src="conclusion_shelf" alt="" />
        <div
          style="display: flex; position: absolute; bottom: 10%"
          class="w-100"
        >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VueSharer from "vue-sharer";

export default {
  directives: {
    sharer: VueSharer,
  },
  data() {
    return {
      count_fiction: 0,
      count_nonfiction: 0,
      is_max_count_fiction: false,
      is_max_count_nonfiction: false,
    };
  },
  methods: {
    addCountFiction() {
      if (this.count_fiction < 50) {
        this.count_fiction++;
      } else {
        this.is_max_count_fiction = true;
      }
    },
    minusCountFiction() {
      if (this.count_fiction > 0) this.count_fiction--;
      if (this.count_fiction < 50) this.is_max_count_fiction = false;
    },
    addCountNonFiction() {
      if (this.count_nonfiction < 50) {
        this.count_nonfiction++;
      } else {
        this.is_max_count_nonfiction = true;
      }
    },
    minusCountNonFiction() {
      if (this.count_nonfiction > 0) this.count_nonfiction--;
      if (this.count_nonfiction < 50) this.is_max_count_nonfiction = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.main-bg {
  background: #fffbdb;
}

.text-conclusion {
  color: #4b4b40;
  max-width: 650px;
  margin: 131px auto;
  @media #{$mq-mini-mobile} {
    padding: 0 10px;
    margin: 34px auto;
  }
}

.non-fiction-text {
  color: #689553;
  font-weight: bold;
}

.fiction-text {
  color: #208bbd;
  font-weight: bold;
}

.minus,
.plus {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: white;
  cursor: pointer;
}

.count {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background: white;
}

.counts {
  @media #{$mq-mini-mobile} {
    flex-direction: column;
    align-items: center;
  }
}

.share-section {
  text-align: center;
  color: #4b4b40;
}

.lines {
  width: 1px;
  background: #e0e0e0;
}
</style>