<template>
    <el-tabs v-model="activeDeclarationSheet" stretch>
        <el-tab-pane label="Khai báo toàn dân" name="1">
            <MedicalFormNational
                :genders="genders"
                :provinces="provinces"
                :national="national"
            />
        </el-tab-pane>
        <el-tab-pane label="Khai báo nội địa" name="2">
            <MedicalFormDomestic
                :genders="genders"
                :provinces="provinces"
                :national="national"
            />
        </el-tab-pane>
        <el-tab-pane label="Khai báo nhập cảnh" name="3">
            <MedicalFormEntry
                :genders="genders"
                :vehicles="vehicles"
                :provinces="provinces"
                :national="national"
                :c-s-c-l="CSCL"
            />
        </el-tab-pane>
    </el-tabs>
</template>

<script>
    import MedicalFormNational from '@/components/medical-form/National.vue';
    import MedicalFormDomestic from '@/components/medical-form/Domestic.vue';
    import MedicalFormEntry from '@/components/medical-form/Entry.vue';
    import { getProvinces, getCSCL } from '@/api/default';
    import national from '@/constants/national';
    import vehicles from '@/constants/vehicles';
    import genders from '@/constants/genders';

    export default {
        components: {
            MedicalFormNational,
            MedicalFormDomestic,
            MedicalFormEntry,
        },

        async asyncData() {
            const { data: { provinces } } = await getProvinces();
            const { data: { CSCL } } = await getCSCL();

            return {
                provinces,
                CSCL,
            };
        },

        data() {
            return {
                genders,
                national,
                vehicles,
                activeDeclarationSheet: '1',
            };
        },
    };
</script>
