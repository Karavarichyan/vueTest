<template>
    <div class="text-xl w-1/2 ml-28  leading-8 font-medium text-indigo-800 w-350 h-370; py-8">
        <h2>Create Post</h2>
        <hr />

        <div  v-if="isSuccess">
            Post Created Successfully
        </div>
        <form @submit.prevent="onCreatePost">
            <div class="form-group">
                <label>Title</label>
                <input type="email" class="outline-0 max-w-sm my-6 border-b-2 border-color: rgb(203 213 225); w-full" v-model="title" />
            </div>
            <!-- <div class="form-group">
                <label>Description</label>
                <textarea
                    class="form-control"
                    v-model="description"
                ></textarea>
            </div> -->

            <div class="mt-3">
                <button type="submit" class="btn btn-primary">
                    Create Post
                </button>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            title: '',
            // description: '',
            isSuccess: false,
        };
    },
    methods: {
        onCreatePost() {
            axios
                .post('https://jsonplaceholder.typicode.com/posts', {
                    title: this.title,
                    // description: this.description,
                })
                .then((response) => {
                    this.isSuccess = true;
                    console.log(response);
                    this.$emit('postcreated');
                });
        },
    },
};
</script>