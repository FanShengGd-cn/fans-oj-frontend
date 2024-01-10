<template>
  <div id="questionSubmitView">
    <a-form :model="searchParams" layout="inline">
      <a-form-item field="questionId" label="题号" style="min-width: 240px">
        <a-input v-model="searchParams.questionId" placeholder="请输入" />
      </a-form-item>
      <a-form-item field="language" label="编程语言" style="min-width: 240px">
        <a-select
          v-model="searchParams.language"
          :style="{ width: '320px' }"
          placeholder="选择编程语言"
        >
          <a-option>java</a-option>
          <a-option>cpp</a-option>
          <a-option>go</a-option>
          <a-option>html</a-option>
        </a-select>
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="doSubmit">搜索</a-button>
      </a-form-item>
    </a-form>
    <a-divider size="0" />
    <a-table
      :ref="tableRef"
      :columns="columns"
      :data="dataList"
      :pagination="{
        showTotal: true,
        pageSize: searchParams.pageSize,
        current: searchParams.current,
        total,
      }"
      @page-change="onPageChange"
    >
      <template #message="{ record }">
        {{ record.judgeInfo.message }}
      </template>
      <template #memory="{ record }">
        <div v-if="record.judgeInfo.memory != null">
          {{ record.judgeInfo.memory / 1024 }}
        </div>
        <div v-else>--</div>
      </template>
      <template #time="{ record }">
        {{ record.judgeInfo.time }}
      </template>
      <template #title="{ record }">
        {{ record.questionVO.content }}
      </template>
      <template #status="{ record }">
        <div v-if="record.status === 0">等待中</div>
        <div v-if="record.status === 1">判题中</div>
        <div v-if="record.status === 2">成功</div>
        <div v-if="record.status === 3">失败</div>
      </template>
      <template #createTime="{ record }">
        {{ moment(record.createTime).format("YYYY-MM-DD") }}
      </template>
    </a-table>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watchEffect } from "vue";
import {
  QuestionVO,
  QuestionControllerService,
  QuestionSubmitQueryRequest,
  JudgeInfo,
} from "../../../generated";
import message from "@arco-design/web-vue/es/message";
import { useRouter } from "vue-router";
import moment from "moment";

const tableRef = ref();

const dataList = ref([]);
const total = ref(0);
const searchParams = ref<QuestionSubmitQueryRequest>({
  questionId: undefined,
  language: undefined,
  pageSize: 10,
  current: 1,
});

const loadData = async () => {
  const res = await QuestionControllerService.listQuestionSubmitByPageUsingPost(
    {
      sortField: "createTime",
      sortOrder: "descend",
    }
  );
  console.log(res);
  // console.log(JSON.stringify(res.data.records[0].judgeInfo.message));
  if (res.code === 0) {
    dataList.value = res.data.records;
    total.value = res.data.total;
  } else {
    message.error("加载失败，" + res.message);
  }
};

/**
 * 监听 searchParams 变量，改变时触发页面的重新加载
 */
watchEffect(() => {
  loadData();
});

/**
 * 页面加载时，请求数据
 */
onMounted(() => {
  loadData();
});

const columns = [
  {
    title: "提交号",
    dataIndex: "id",
  },
  {
    title: "编程语言",
    dataIndex: "language",
  },
  {
    title: "判题信息",
    // slotName: "judgeInfo",
    children: [
      {
        title: "执行结果",
        slotName: "message",
      },
      {
        title: "消耗内存 kb",
        slotName: "memory",
      },
      {
        title: "消耗时间 ms",
        slotName: "time",
      },
    ],
  },
  {
    title: "状态",
    slotName: "status",
  },
  {
    title: "题目id",
    dataIndex: "questionId",
  },
  {
    title: "题目名称",
    slotName: "title",
  },
  {
    title: "提交者 id",
    dataIndex: "userId",
  },
  {
    title: "创建时间",
    slotName: "createTime",
  },
];

const onPageChange = (page: number) => {
  searchParams.value = {
    ...searchParams.value,
    current: page,
  };
};

const router = useRouter();

/**
 * 跳转到做题页面
 * @param question
 */
const toQuestionPage = (question: QuestionVO) => {
  router.push({
    path: `/view/question/${question.id}`,
  });
};

/**
 * 确认搜索，重新加载数据
 */
const doSubmit = () => {
  // 这里需要重置搜索页号
  searchParams.value = {
    ...searchParams.value,
    current: 1,
  };
};
</script>

<style scoped>
#questionSubmitView {
  max-width: 1280px;
  margin: 0 auto;
}
</style>
