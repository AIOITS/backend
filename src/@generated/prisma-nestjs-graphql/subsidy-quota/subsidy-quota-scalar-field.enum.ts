import { registerEnumType } from '@nestjs/graphql';

export enum SubsidyQuotaScalarFieldEnum {
    id = "id",
    nomor_stnk = "nomor_stnk",
    quota = "quota"
}


registerEnumType(SubsidyQuotaScalarFieldEnum, { name: 'SubsidyQuotaScalarFieldEnum', description: undefined })
