<!--个人资料设置页面组件-->
<template>
    <div class="setting-list">
        <h1 class="header">
            修改密码
        </h1>
        <el-form
            :model="formData"
            :rules="rules"
            ref="change-password-form"
            status-icon
        >
            <el-form-item prop="oldPassword">
                <div class="item">
                    <div class="title">
                        原密码
                    </div>
                    <el-input
                        v-model="formData.oldPassword"
                        class="input"
                        type="password"
                        maxlength="24"
                        placeholder="请输入原密码"
                    />
                </div>
            </el-form-item>
            <el-form-item prop="newPassword">
                <div class="item">
                    <div class="title">
                        新密码
                    </div>
                    <el-input
                        v-model="formData.newPassword"
                        class="input"
                        type="password"
                        maxlength="24"
                        placeholder="请输入新密码"/>
                </div>
            </el-form-item>
            <el-form-item prop="newPassword2">
                <div class="item">
                    <div class="title">
                        确认新密码
                    </div>
                    <el-input
                        v-model="formData.newPassword2"
                        class="input"
                        type="password"
                        maxlength="24"
                        placeholder="确认新密码"/>
                </div>
            </el-form-item>
        </el-form>
        <div class="sub-btn">
            <el-button
                size="medium"
                plain
                @click="resetForm('change-password-form')"
                style="width: 98px;"
            >
                取消
            </el-button>
            <el-button
                size="medium"
                type="primary"
                :loading="loading"
                @click="handleSave('change-password-form')"
            >
                <template v-if="!loading">确认修改</template>
                <template v-else>提交中...</template>
            </el-button>

        </div>
    </div>


</template>

<script>

    export default {
        name: "ChangePassword",
        components: {},
        props: [],
        data() {
            //确认密码自定义校验
            const checkNewPassword2 = (rule, value, callback) => {
                if (value !== this.formData.newPassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback()
                }
            };
            //新密码自定义校验
            const checkNewPassword = (rule, value, callback) => {
                if (value === this.formData.oldPassword) {
                    callback(new Error('新密码不能和旧密码相同!'));
                } else {
                    callback()
                }
            };

            return {
                loading: false,
                formData: {
                    oldPassword: '',
                    newPassword: '',
                    newPassword2: '',
                },
                rules: {
                    oldPassword: [
                        {required: true, message: '请输入原密码', trigger: 'blur'},
                        {min: 6, max: 24, message: '长度在 6 到 24 个字符', trigger: 'blur'}
                    ],
                    newPassword: [
                        {required: true, message: '请输入新密码', trigger: 'blur'},
                        {min: 6, max: 24, message: '长度在 6 到 24 个字符', trigger: 'blur'},
                        {validator: checkNewPassword, trigger: 'blur'}
                    ],
                    newPassword2: [
                        {required: true, message: '请输入确认密码', trigger: 'blur'},
                        {validator: checkNewPassword2, trigger: 'blur'}
                    ]

                }

            }
        },
        methods: {
            //确认修改
            handleSave(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        console.log('submit')
                    } else {
                        console.log('error')
                    }
                })
            },
            //重置表单
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }

        },
        created() {
            document.title = '修改密码 - 博客'
        }
    }
</script>

<style scoped>

    .setting-list {
        padding: 0 20px;
    }

    .header {
        font-size: 18px;
        font-weight: 600;
        margin: 20px 0;
    }

    .item {
        display: flex;
        align-items: center;
        padding-top: 20px;
        border-top: 1px solid #f1f1f1;
    }

    .title {
        width: 100px;
        font-size: 15px;
    }

    .input-box {
        display: flex;
        flex: 1;

    }

    .input {
        flex: 1;
        display: inline-block;
        border: none;
        outline: none;
        color: #909090;
        font-size: 15px;
    }

    .sub-btn {
        text-align: right;
        margin-top: 20px;
    }

    @media (min-width: 600px) {
        .el-form .el-form-item:last-child {
            margin-bottom: 0;
            padding-bottom: 20px;
            border-bottom: 1px solid #f1f1f1;
        }

    }

    @media (max-width: 600px) {
        .setting-list {
            padding: 0;
        }

        .item {
            flex-direction: column;
            align-items: flex-start;
            padding-top: 0;
            border-top: 0;
        }

        .title {

        }

    }

    input::-webkit-input-placeholder { /* WebKit browsers */
        color: #b4b4b4;
    }

    input::-moz-placeholder { /* Mozilla Firefox 19+ */
        color: #b4b4b4;
    }

    input:-ms-input-placeholder { /* Internet Explorer 10+ */
        color: #b4b4b4;
    }
</style>
