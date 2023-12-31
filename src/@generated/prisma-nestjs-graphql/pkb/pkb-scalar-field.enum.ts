import { registerEnumType } from '@nestjs/graphql';

export enum PkbScalarFieldEnum {
    nomor_pkb = "nomor_pkb",
    status_pajak = "status_pajak",
    bbknb_pokok = "bbknb_pokok",
    bbknb_sanksi = "bbknb_sanksi",
    PKB_pokok = "PKB_pokok",
    PKB_sanksi = "PKB_sanksi",
    swdkllj_pokok = "swdkllj_pokok",
    swdkllj_sanksi = "swdkllj_sanksi",
    administrasi_stnk_pokok = "administrasi_stnk_pokok",
    administrasi_stnk_sanksi = "administrasi_stnk_sanksi",
    administrasi_tnkb_pokok = "administrasi_tnkb_pokok",
    administrasi_tnkb_sanksi = "administrasi_tnkb_sanksi"
}


registerEnumType(PkbScalarFieldEnum, { name: 'PkbScalarFieldEnum', description: undefined })
