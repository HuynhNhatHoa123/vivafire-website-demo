"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";

const projects = [
  {
    "id": "01-chung-cu-phu-my-c2",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Chung cư Phú Mỹ – C2",
    "location": "Thủ Dầu Một",
    "description": "Cửa ngăn cháy, cửa thép chống cháy",
    "image": "/projects/row-03-col-03-60.png",
    "images": [
      "/projects/row-03-col-03-60.png",
      "/projects/row-03-col-04-61.jpg"
    ],
    "stt": 1
  },
  {
    "id": "02-cong-trinh-cai-tao-can-ho-thiet-bi-pccc-30-4",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Công trình cải tạo căn hộ (Thiết bị PCCC 30/4)",
    "location": "78 Tôn Thất Đạm, TP.HCM",
    "description": "Cửa chống cháy",
    "image": "https://static-2.happynest.vn/storage/uploads/2023/08/an-home-07-1692091723.jpg",
    "images": ["https://static-2.happynest.vn/storage/uploads/2023/08/an-home-07-1692091723.jpg"],
    "imageIsIllustration": true,
    "imageSource": "https://happynest.vn/chuyen-nha/100058048/cai-tao-can-ho-49m2-tai-sai-gon-nhu-the-nao-de-van-thoang-dang-tien-nghi-cho-gia-dinh-4-nguoi",
    "stt": 2
  },
  {
    "id": "03-chung-cu-kieu-plaza",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Chung cư KIỀU Plaza",
    "location": "927 Trần Hưng Đạo, Q.5",
    "description": "Hút khói, cấp khí bù; hệ thống PCCC, báo cháy",
    "image": "/projects/row-05-col-03-65.jpg",
    "images": [
      "/projects/row-05-col-03-65.jpg",
      "/projects/row-05-col-04-01.jpg",
      "/projects/row-05-col-04-55.jpg"
    ],
    "stt": 3
  },
  {
    "id": "04-parkland-p52-p53",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Parkland P52 + P53",
    "location": "277 Xa lộ Hà Nội, Thủ Đức",
    "description": "Tư vấn, lập hồ sơ, mời nghiệm thu PCCC",
    "image": "/projects/row-06-col-03-02.jpg",
    "images": [
      "/projects/row-06-col-03-02.jpg"
    ],
    "stt": 4
  },
  {
    "id": "05-the-manor-1-2",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "The Manor 1 & 2",
    "location": "89-91 Nguyễn Hữu Cảnh, Bình Thạnh",
    "description": "Kiểm tra, bảo trì, bảo dưỡng PCCC",
    "image": "/projects/row-07-col-03-03.jpg",
    "images": [
      "/projects/row-07-col-03-03.jpg"
    ],
    "stt": 5
  },
  {
    "id": "06-can-ho-cao-tang-phu-hung",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Căn hộ cao tầng Phú Hưng",
    "location": "Chánh Hiệp, TP.HCM",
    "description": "Chữa cháy nước, chữa cháy khí, báo cháy",
    "image": "/projects/row-08-col-03-04.jpg",
    "images": [
      "/projects/row-08-col-03-04.jpg",
      "/projects/row-08-col-04-05.jpg"
    ],
    "stt": 6
  },
  {
    "id": "07-khu-tm-dv-vp-can-ho-bcons-khu-b",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Khu TM – DV – VP – Căn hộ Bcons (Khu B)",
    "location": "Đông Hòa, Dĩ An",
    "description": "PCCC và chống sét Khu B",
    "image": "/projects/row-09-col-03-71.png",
    "images": [
      "/projects/row-09-col-03-71.png",
      "/projects/row-09-col-04-06.jpg"
    ],
    "stt": 7
  },
  {
    "id": "08-thap-ven-song",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Tháp ven sông",
    "location": "Hòa Cường, Đà Nẵng",
    "description": "Hệ thống PCCC",
    "image": "/projects/row-10-col-03-07.jpg",
    "images": [
      "/projects/row-10-col-03-07.jpg",
      "/projects/row-10-col-04-72.jpg"
    ],
    "stt": 8
  },
  {
    "id": "09-chung-cu-tt-avio",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Chung cư TT Avio",
    "location": "Dĩ An",
    "description": "Thi công hệ thống PCCC",
    "image": "/projects/row-11-col-03-66.jpg",
    "images": [
      "/projects/row-11-col-03-66.jpg",
      "/projects/row-11-col-04-08.jpg"
    ],
    "stt": 9
  },
  {
    "id": "10-tan-van-tower",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Tân Vạn Tower",
    "location": "Biên Hòa, Đồng Nai",
    "description": "Hệ thống cơ điện (MEP)",
    "image": "/projects/row-12-col-03-09.jpg",
    "images": [
      "/projects/row-12-col-03-09.jpg",
      "/projects/row-12-col-04-10.jpg"
    ],
    "stt": 10
  },
  {
    "id": "11-the-filmore-a-nang",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "The Filmore Đà Nẵng",
    "location": "Hải Châu, Đà Nẵng",
    "description": "CCTV, Access Control, VDP, bãi đỗ xe, PMS, IBS",
    "image": "/projects/row-13-col-03-11.jpg",
    "images": [
      "/projects/row-13-col-03-11.jpg",
      "/projects/row-13-col-04-12.jpg"
    ],
    "stt": 11
  },
  {
    "id": "12-khu-o-thi-vuon-tokyu-binh-duong",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Khu đô thị vườn Tokyu Bình Dương",
    "location": "Thủ Dầu Một",
    "description": "Tel/Data, CCTV, PA, VDP, IBS",
    "image": "/projects/row-14-col-03-13.jpg",
    "images": [
      "/projects/row-14-col-03-13.jpg"
    ],
    "stt": 12
  },
  {
    "id": "13-sunwah-pearl",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Sunwah Pearl",
    "location": "90 Nguyễn Hữu Cảnh, Bình Thạnh",
    "description": "Tel/Data, CCTV, PA, VDP, Access Control, bãi đỗ xe",
    "image": "/projects/row-15-col-03-14.jpg",
    "images": [
      "/projects/row-15-col-03-14.jpg",
      "/projects/row-15-col-04-67.jpg"
    ],
    "stt": 13
  },
  {
    "id": "14-asiana-capella-quan-6",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Asiana Capella Quận 6",
    "location": "Q.6, TP.HCM",
    "description": "Video Door Phone",
    "image": "/projects/row-16-col-03-15.jpg",
    "images": [
      "/projects/row-16-col-03-15.jpg"
    ],
    "stt": 14
  },
  {
    "id": "15-the-manor-central-park",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "The Manor Central Park",
    "location": "Hoàng Mai, Hà Nội",
    "description": "Access Control",
    "image": "/projects/row-17-col-03-73.jpg",
    "images": [
      "/projects/row-17-col-03-73.jpg"
    ],
    "stt": 15
  },
  {
    "id": "16-the-lancer-one-verandah",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "The Lancer (One Verandah)",
    "location": "Thủ Thiêm, TP.HCM",
    "description": "Phủ sóng di động (IBS)",
    "image": "/projects/row-18-col-03-16.jpg",
    "images": [
      "/projects/row-18-col-03-16.jpg",
      "/projects/row-18-col-04-68.jpg"
    ],
    "stt": 16
  },
  {
    "id": "17-grand-manhattan",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Grand Manhattan",
    "location": "100 Cô Giang, Q.1, TP.HCM",
    "description": "Video Door Phone, Access Control; hộp ELV VIVAIO",
    "image": "/projects/row-19-col-03-17.jpg",
    "images": [
      "/projects/row-19-col-03-17.jpg",
      "/projects/row-19-col-04-18.jpg"
    ],
    "stt": 17
  },
  {
    "id": "18-narra-residences-mu8-empire-city-thu-thiem",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Narra Residences (MU8), Empire City Thủ Thiêm",
    "location": "Chưa cập nhật địa điểm",
    "description": "Hộp ELV VIVAIO",
    "image": "/projects/row-20-col-03-19.jpg",
    "images": [
      "/projects/row-20-col-03-19.jpg",
      "/projects/row-20-col-04-20.jpg"
    ],
    "stt": 18
  },
  {
    "id": "19-chung-cu-vinh-hoi",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Chung cư Vĩnh Hội",
    "location": "Vĩnh Hội, Q.4, TP.HCM",
    "description": "Video Door Phone, bãi đỗ xe, Access Control",
    "image": "/projects/row-21-col-03-21.jpg",
    "images": [
      "/projects/row-21-col-03-21.jpg",
      "/projects/row-21-col-04-22.jpg"
    ],
    "stt": 19
  },
  {
    "id": "20-feliz-en-vista",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Feliz en Vista",
    "location": "Cát Lái, TP.HCM",
    "description": "Tel/Data",
    "image": "/projects/row-22-col-03-23.jpg",
    "images": [
      "/projects/row-22-col-03-23.jpg"
    ],
    "stt": 20
  },
  {
    "id": "21-thuan-viet-residence",
    "category": "Chung cư & nhà ở",
    "type": "CHUNG CƯ & NHÀ Ở",
    "title": "Thuận Việt Residence",
    "location": "319 Lý Thường Kiệt, TP.HCM",
    "description": "Tel/Data, CATV, Wifi",
    "image": "/projects/row-23-col-03-24.jpg",
    "images": [
      "/projects/row-23-col-03-24.jpg"
    ],
    "stt": 21
  },
  {
    "id": "22-toa-nha-van-phong-quan-tan-phu-cana-betania",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Tòa nhà văn phòng Quận Tân Phú (CaNa – BETANIA)",
    "location": "725/21 Trường Chinh, Tân Phú",
    "description": "Cửa chống cháy",
    "image": "https://chodat.com.vn/public/uploads/ckfinder/userfiles/images/CHO-THUE/toa-nha-cho-thue-van-phong-the-nexus-quan-1.jpg",
    "images": ["https://chodat.com.vn/public/uploads/ckfinder/userfiles/images/CHO-THUE/toa-nha-cho-thue-van-phong-the-nexus-quan-1.jpg"],
    "imageIsIllustration": true,
    "imageSource": "https://chodat.com.vn/tu-van/the-nexus-toa-nha-van-phong-cho-thue-36-tang-bieu-tuong-cach-mang-khong-gian-lam-viec-xanh",
    "stt": 22
  },
  {
    "id": "23-toa-nha-van-phong-135-cong-hoa",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Tòa nhà văn phòng 135 Cộng Hòa",
    "location": "135 Cộng Hòa, TP.HCM",
    "description": "Cửa chống cháy",
    "image": "https://kimquanggroup.vn/images/van-phong-cho-thue-dai-nguyen-building-385a-cong-hoa-256921690539373.jpg",
    "images": ["https://kimquanggroup.vn/images/van-phong-cho-thue-dai-nguyen-building-385a-cong-hoa-256921690539373.jpg"],
    "imageIsIllustration": true,
    "imageSource": "https://kimquanggroup.vn/van-phong-cho-thue-dai-nguyen-building-385a-cong-hoa-bds2569.htm",
    "stt": 23
  },
  {
    "id": "24-nha-o-ket-hop-van-phong-thu-uc-avenue",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Nhà ở kết hợp văn phòng Thủ Đức (Avenue)",
    "location": "14 Tú Xương, Hiệp Phú",
    "description": "Thiết kế, thẩm duyệt PCCC",
    "image": "/projects/row-27-col-03-25.jpg",
    "images": [
      "/projects/row-27-col-03-25.jpg"
    ],
    "stt": 24
  },
  {
    "id": "25-citilight-tower",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Citilight Tower",
    "location": "45 Võ Thị Sáu, Q.1",
    "description": "Bảo trì hệ thống PCCC",
    "image": "/projects/row-28-col-03-26.jpg",
    "images": [
      "/projects/row-28-col-03-26.jpg"
    ],
    "stt": 25
  },
  {
    "id": "26-vimedimex-building",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Vimedimex Building",
    "location": "246 Cống Quỳnh, Q.1",
    "description": "Bảo trì hệ thống PCCC",
    "image": "/projects/row-29-col-03-27.jpg",
    "images": [
      "/projects/row-29-col-03-27.jpg"
    ],
    "stt": 26
  },
  {
    "id": "27-office-haus",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Office Haus",
    "location": "Khu Tân Thắng, Tân Phú",
    "description": "ĐHKK, hút khói tạo áp, điện, điện nhẹ, PCCC, cấp thoát nước",
    "image": "/projects/row-30-col-03-28.jpg",
    "images": [
      "/projects/row-30-col-03-28.jpg",
      "/projects/row-30-col-04-29.jpg"
    ],
    "stt": 27
  },
  {
    "id": "28-toyota-a-lat-trung-tam-trung-bay",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Toyota Đà Lạt (Trung tâm trưng bày)",
    "location": "Đà Lạt, Lâm Đồng",
    "description": "PCCC; điện nhẹ; thiết kế thẩm duyệt PCCC",
    "image": "/projects/row-31-col-03-30.jpg",
    "images": [
      "/projects/row-31-col-03-30.jpg",
      "/projects/row-31-col-04-31.jpg"
    ],
    "stt": 28
  },
  {
    "id": "29-toa-nha-vp-tm-dv-becamex",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Tòa nhà VP – TM – DV Becamex",
    "location": "Thủ Dầu Một",
    "description": "Phủ sóng di động (IBS)",
    "image": "/projects/row-32-col-03-81.jpg",
    "images": [
      "/projects/row-32-col-03-81.jpg"
    ],
    "stt": 29
  },
  {
    "id": "30-cmc-creative-space-quan-7",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "CMC Creative Space Quận 7",
    "location": "KCX Tân Thuận, Q.7",
    "description": "Camera an ninh",
    "image": "/projects/row-33-col-03-32.jpg",
    "images": [
      "/projects/row-33-col-03-32.jpg",
      "/projects/row-33-col-04-33.jpg"
    ],
    "stt": 30
  },
  {
    "id": "31-porsche-quan-7",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Porsche Quận 7",
    "location": "KCX Tân Thuận, Q.7",
    "description": "Hệ thống AV",
    "image": "/projects/row-34-col-03-34.jpg",
    "images": [
      "/projects/row-34-col-03-34.jpg",
      "/projects/row-34-col-04-35.jpg"
    ],
    "stt": 31
  },
  {
    "id": "32-ttc-tower",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "TTC Tower",
    "location": "253 Hoàng Văn Thụ, TP.HCM",
    "description": "Bãi đỗ xe, Access Control, CCTV, PA, Tel/Data",
    "image": "/projects/row-35-col-03-36.jpg",
    "images": [
      "/projects/row-35-col-03-36.jpg",
      "/projects/row-35-col-04-37.jpg"
    ],
    "stt": 32
  },
  {
    "id": "33-pegasus-plaza",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Pegasus Plaza",
    "location": "Võ Thị Sáu, Biên Hòa, Đồng Nai",
    "description": "Bãi đỗ xe",
    "image": "/projects/row-36-col-03-38.jpg",
    "images": [
      "/projects/row-36-col-03-38.jpg"
    ],
    "stt": 33
  },
  {
    "id": "34-trung-tam-thuong-mai-gigamall",
    "category": "Văn phòng & thương mại",
    "type": "VĂN PHÒNG & THƯƠNG MẠI",
    "title": "Trung tâm thương mại Gigamall",
    "location": "240–242 Phạm Văn Đồng, TP.HCM",
    "description": "Tel/Data",
    "image": "/projects/row-37-col-03-39.jpg",
    "images": [
      "/projects/row-37-col-03-39.jpg"
    ],
    "stt": 34
  },
  {
    "id": "35-benh-vien-san-nhi-tinh-phu-yen",
    "category": "Bệnh viện & trường học",
    "type": "BỆNH VIỆN & TRƯỜNG HỌC",
    "title": "Bệnh viện Sản Nhi tỉnh Phú Yên",
    "location": "Tuy Hòa, Phú Yên",
    "description": "Mạng điện thoại, máy tính; xếp hàng tự động; báo gọi y tá; âm thanh hội trường; barie cổng; chấm công",
    "image": "/projects/row-39-col-03-40.jpg",
    "images": [
      "/projects/row-39-col-03-40.jpg",
      "/projects/row-39-col-04-64.png"
    ],
    "stt": 35
  },
  {
    "id": "36-truong-h-cong-nghe-thong-tin-hqg-tp-hcm",
    "category": "Bệnh viện & trường học",
    "type": "BỆNH VIỆN & TRƯỜNG HỌC",
    "title": "Trường ĐH Công nghệ Thông tin – ĐHQG TP.HCM",
    "location": "Thủ Đức",
    "description": "Thiết bị phòng thí nghiệm phòng chống tấn công mạng",
    "image": "/projects/row-40-col-03-41.jpg",
    "images": [
      "/projects/row-40-col-03-41.jpg",
      "/projects/row-40-col-04-42.jpg"
    ],
    "stt": 36
  },
  {
    "id": "37-truong-inh-thien-ly-co-so-2-c20",
    "category": "Bệnh viện & trường học",
    "type": "BỆNH VIỆN & TRƯỜNG HỌC",
    "title": "Trường Đinh Thiện Lý cơ sở 2 (C20)",
    "location": "Q.7, TP.HCM",
    "description": "Hệ thống nghe nhìn (AV)",
    "image": "/projects/row-41-col-03-79.jpg",
    "images": [
      "/projects/row-41-col-03-79.jpg"
    ],
    "stt": 37
  },
  {
    "id": "38-benh-vien-ngoai-khoa-nam-sai-gon",
    "category": "Bệnh viện & trường học",
    "type": "BỆNH VIỆN & TRƯỜNG HỌC",
    "title": "Bệnh viện Ngoại khoa Nam Sài Gòn",
    "location": "Bình Chánh, TP.HCM",
    "description": "Tel/Data/Wifi",
    "image": "/projects/row-42-col-03-43.jpg",
    "images": [
      "/projects/row-42-col-03-43.jpg",
      "/projects/row-42-col-04-44.jpg"
    ],
    "stt": 38
  },
  {
    "id": "39-benh-vien-san-nhi-quoc-te-gia-an",
    "category": "Bệnh viện & trường học",
    "type": "BỆNH VIỆN & TRƯỜNG HỌC",
    "title": "Bệnh viện Sản Nhi Quốc tế Gia An",
    "location": "Q.7, TP.HCM",
    "description": "Điện thoại & mạng; cửa từ; hạ tầng",
    "image": "/projects/row-43-col-03-80.jpg",
    "images": [
      "/projects/row-43-col-03-80.jpg"
    ],
    "stt": 39
  },
  {
    "id": "40-benh-vien-viet-my",
    "category": "Bệnh viện & trường học",
    "type": "BỆNH VIỆN & TRƯỜNG HỌC",
    "title": "Bệnh viện Việt Mỹ",
    "location": "Chưa cập nhật địa điểm",
    "description": "Cáp và tủ rack VIVAIO",
    "image": "/projects/row-44-col-03-45.jpg",
    "images": [
      "/projects/row-44-col-03-45.jpg",
      "/projects/row-44-col-04-46.jpg"
    ],
    "stt": 40
  },
  {
    "id": "41-vien-tim-tp-hcm",
    "category": "Bệnh viện & trường học",
    "type": "BỆNH VIỆN & TRƯỜNG HỌC",
    "title": "Viện Tim TP.HCM",
    "location": "Chưa cập nhật địa điểm",
    "description": "Cáp VIVAIO",
    "image": "/projects/row-45-col-03-47.jpg",
    "images": [
      "/projects/row-45-col-03-47.jpg"
    ],
    "stt": 41
  },
  {
    "id": "42-iconic-long-hai",
    "category": "Khách sạn & nghỉ dưỡng",
    "type": "KHÁCH SẠN & NGHỈ DƯỠNG",
    "title": "ICONIC Long Hải",
    "location": "Chưa cập nhật địa điểm",
    "description": "Toàn bộ M&E và PCCC",
    "image": "/projects/row-47-col-03-74.jpg",
    "images": [
      "/projects/row-47-col-03-74.jpg",
      "/projects/row-47-col-04-48.jpg"
    ],
    "stt": 42
  },
  {
    "id": "43-apec-mandala-wyndham-phu-yen",
    "category": "Khách sạn & nghỉ dưỡng",
    "type": "KHÁCH SẠN & NGHỈ DƯỠNG",
    "title": "Apec Mandala Wyndham Phú Yên",
    "location": "Tuy Hòa, Phú Yên",
    "description": "Tel/Data, CCTV, PA, Access Control, bãi đỗ xe",
    "image": "/projects/row-48-col-03-49.jpg",
    "images": [
      "/projects/row-48-col-03-49.jpg",
      "/projects/row-48-col-04-62.png"
    ],
    "stt": 43
  },
  {
    "id": "44-khach-san-pullman-hai-phong",
    "category": "Khách sạn & nghỉ dưỡng",
    "type": "KHÁCH SẠN & NGHỈ DƯỠNG",
    "title": "Khách sạn Pullman Hải Phòng",
    "location": "Ngô Quyền, Hải Phòng",
    "description": "Tel/Data, CCTV, PA, Access Control, bãi đỗ xe, IBS",
    "image": "/projects/row-49-col-03-50.jpg",
    "images": [
      "/projects/row-49-col-03-50.jpg"
    ],
    "stt": 44
  },
  {
    "id": "45-wink-a-nang-tran-hung-ao-tran-phu",
    "category": "Khách sạn & nghỉ dưỡng",
    "type": "KHÁCH SẠN & NGHỈ DƯỠNG",
    "title": "Wink Đà Nẵng (Trần Hưng Đạo, Trần Phú)",
    "location": "Sơn Trà, Đà Nẵng",
    "description": "Phủ sóng di động (IBS)",
    "image": "/projects/row-50-col-03-76.jpg",
    "images": [
      "/projects/row-50-col-03-76.jpg"
    ],
    "stt": 45
  },
  {
    "id": "46-hotel-ho-tram-mgallery",
    "category": "Khách sạn & nghỉ dưỡng",
    "type": "KHÁCH SẠN & NGHỈ DƯỠNG",
    "title": "Hotel Hồ Tràm – MGallery",
    "location": "Xuyên Mộc, BR-VT",
    "description": "Điện – điện nhẹ toàn khu",
    "image": "/projects/row-51-col-03-77.jpg",
    "images": [
      "/projects/row-51-col-03-77.jpg"
    ],
    "stt": 46
  },
  {
    "id": "47-khach-san-h5-novaworld-phan-thiet",
    "category": "Khách sạn & nghỉ dưỡng",
    "type": "KHÁCH SẠN & NGHỈ DƯỠNG",
    "title": "Khách sạn H5 – Novaworld Phan Thiết",
    "location": "Phan Thiết, Bình Thuận",
    "description": "Điều hòa không khí và thông gió (ACMV)",
    "image": "/projects/row-52-col-03-75.jpg",
    "images": [
      "/projects/row-52-col-03-75.jpg"
    ],
    "stt": 47
  },
  {
    "id": "48-vinpearl-resort-spa-hoi-an",
    "category": "Khách sạn & nghỉ dưỡng",
    "type": "KHÁCH SẠN & NGHỈ DƯỠNG",
    "title": "Vinpearl Resort & Spa Hội An",
    "location": "Cửa Đại, Hội An",
    "description": "Tel/Data, CATV, IP Camera, PA, BMS",
    "image": "/projects/row-53-col-03-51.jpg",
    "images": [
      "/projects/row-53-col-03-51.jpg"
    ],
    "stt": 48
  },
  {
    "id": "49-tram-bien-ap-500kv-nha-be-o-mon-may-2",
    "category": "Hạ tầng & công cộng",
    "type": "HẠ TẦNG & CÔNG CỘNG",
    "title": "Trạm biến áp 500kV Nhà Bè – Ô Môn (Máy 2)",
    "location": "Nhà Bè, TP.HCM",
    "description": "Thi công hệ thống PCCC",
    "image": "https://bcp.cdnchinhphu.vn/334894974524682240/2022/12/13/anh1trambienapomon12122022-1670896214223271350572.jpg",
    "images": ["https://bcp.cdnchinhphu.vn/334894974524682240/2022/12/13/anh1trambienapomon12122022-1670896214223271350572.jpg"],
    "imageIsIllustration": true,
    "imageSource": "https://baochinhphu.vn/hoan-thanh-nang-cong-suat-tram-bien-ap-500-kv-o-mon-102221213090017338.htm",
    "stt": 49
  },
  {
    "id": "50-trung-tam-du-lieu-ong-nai-cong-an-tinh",
    "category": "Hạ tầng & công cộng",
    "type": "HẠ TẦNG & CÔNG CỘNG",
    "title": "Trung tâm dữ liệu Đồng Nai (Công an tỉnh)",
    "location": "Biên Hòa, Đồng Nai",
    "description": "Hệ thống chữa cháy chuyên biệt cho Data Center",
    "image": "/projects/row-56-col-03-52.jpg",
    "images": [
      "/projects/row-56-col-03-52.jpg",
      "/projects/row-56-col-04-53.jpg"
    ],
    "stt": 50
  },
  {
    "id": "51-trung-tam-nghien-cuu-trien-khai-khu-cong-nghe-cao-q-9",
    "category": "Hạ tầng & công cộng",
    "type": "HẠ TẦNG & CÔNG CỘNG",
    "title": "Trung tâm nghiên cứu triển khai Khu Công nghệ cao Q.9",
    "location": "Khu CNC, Thủ Đức",
    "description": "Điều hòa không khí & thông gió",
    "image": "https://file3.qdnd.vn/data/images/0/2024/03/06/upload_2268/nghie%CC%82n%20cu%CC%9B%CC%81u%20khoa%20hoc%20tai%20trung%20ta%CC%82m%20r%20d%20kcnc%202%20sixe%20nho.jpg",
    "images": ["https://file3.qdnd.vn/data/images/0/2024/03/06/upload_2268/nghie%CC%82n%20cu%CC%9B%CC%81u%20khoa%20hoc%20tai%20trung%20ta%CC%82m%20r%20d%20kcnc%202%20sixe%20nho.jpg"],
    "imageIsIllustration": true,
    "imageSource": "https://www.qdnd.vn/giao-duc-khoa-hoc/tin-tuc/thanh-pho-ho-chi-minh-phat-trien-trung-tam-nghien-cuu-cong-nghe-cao-dat-chuan-quoc-te-767641",
    "stt": 51
  },
  {
    "id": "52-nha-quoc-hoi-lao",
    "category": "Hạ tầng & công cộng",
    "type": "HẠ TẦNG & CÔNG CỘNG",
    "title": "Nhà Quốc hội Lào",
    "location": "Vientiane, Lào",
    "description": "Hệ thống bãi giữ xe thông minh",
    "image": "/projects/row-58-col-03-54.jpg",
    "images": [
      "/projects/row-58-col-03-54.jpg"
    ],
    "stt": 52
  },
  {
    "id": "53-san-bay-quoc-te-long-thanh-du-an-thanh-phan-3",
    "category": "Hạ tầng & công cộng",
    "type": "HẠ TẦNG & CÔNG CỘNG",
    "title": "Sân bay quốc tế Long Thành – Dự án thành phần 3",
    "location": "Long Thành, Đồng Nai",
    "description": "Hệ thống LBMS",
    "image": "/projects/row-59-col-03-69.jpg",
    "images": [
      "/projects/row-59-col-03-69.jpg"
    ],
    "stt": 53
  },
  {
    "id": "54-san-bay-phu-bai",
    "category": "Hạ tầng & công cộng",
    "type": "HẠ TẦNG & CÔNG CỘNG",
    "title": "Sân bay Phú Bài",
    "location": "Hương Thủy, Thừa Thiên Huế",
    "description": "Tel/Data, CCTV",
    "image": "/projects/row-60-col-03-78.jpg",
    "images": [
      "/projects/row-60-col-03-78.jpg"
    ],
    "stt": 54
  },
  {
    "id": "55-nha-xuong-am-hoc-quoc-quang-viet-nam",
    "category": "Nhà máy & kho xưởng",
    "type": "NHÀ MÁY & KHO XƯỞNG",
    "title": "Nhà xưởng Âm học Quốc Quang (Việt Nam)",
    "location": "KCN Điện Nam-Điện Ngọc, Đà Nẵng",
    "description": "Cửa thép, cửa cuốn; hệ thống báo cháy",
    "image": "/projects/row-62-col-03-56.png",
    "images": [
      "/projects/row-62-col-03-56.png",
      "/projects/row-62-col-04-57.png"
    ],
    "stt": 55
  },
  {
    "id": "56-nha-may-giay-thuan-an",
    "category": "Nhà máy & kho xưởng",
    "type": "NHÀ MÁY & KHO XƯỞNG",
    "title": "Nhà máy giấy Thuận An",
    "location": "KCN Minh Hưng III, Bình Phước",
    "description": "Cửa chống cháy",
    "image": "/projects/row-63-col-03-58.png",
    "images": [
      "/projects/row-63-col-03-58.png",
      "/projects/row-63-col-04-59.png"
    ],
    "stt": 56
  },
  {
    "id": "57-nha-may-fookyik-furniture-vn",
    "category": "Nhà máy & kho xưởng",
    "type": "NHÀ MÁY & KHO XƯỞNG",
    "title": "Nhà máy FOOKYIK FURNITURE VN",
    "location": "KCN Tân Bình, Bàu Bàng",
    "description": "Cửa thép và cửa chống cháy",
    "image": "/projects/row-64-col-03-70.png",
    "images": [
      "/projects/row-64-col-03-70.png"
    ],
    "stt": 57
  },
  {
    "id": "58-xuong-che-bien-lam-san-lam-nghiep-bao-lam",
    "category": "Nhà máy & kho xưởng",
    "type": "NHÀ MÁY & KHO XƯỞNG",
    "title": "Xưởng chế biến lâm sản (Lâm nghiệp Bảo Lâm)",
    "location": "Lộc Thắng, Bảo Lộc, Lâm Đồng",
    "description": "Thiết kế, thẩm duyệt PCCC",
    "image": "/projects/row-65-col-03-63.png",
    "images": [
      "/projects/row-65-col-03-63.png"
    ],
    "stt": 58
  }
];

const filters = [
  "Tất cả",
  "Chung cư & nhà ở",
  "Văn phòng & thương mại",
  "Bệnh viện & trường học",
  "Khách sạn & nghỉ dưỡng",
  "Hạ tầng & công cộng",
  "Nhà máy & kho xưởng",
];

const processSteps = [
  {
    number: "01",
    title: "Tiếp nhận nhu cầu",
    description: "Tìm hiểu loại công trình, mục đích sử dụng và yêu cầu ban đầu.",
    icon: "↗",
  },
  {
    number: "02",
    title: "Rà soát kỹ thuật",
    description: "Đối chiếu thông số, hồ sơ và điều kiện ứng dụng của thiết bị.",
    icon: "⌘",
  },
  {
    number: "03",
    title: "Đề xuất phương án",
    description: "Trao đổi lựa chọn phù hợp với phạm vi yêu cầu và thông tin hiện có.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Phối hợp triển khai",
    description: "Tiếp tục trao đổi thông tin, báo giá và các bước tiếp theo.",
    icon: "✓",
  },
];

const strengths = [
  {
    title: "Kinh nghiệm đa lĩnh vực",
    description: "Tham khảo các nhóm công trình thuộc nhiều lĩnh vực khác nhau.",
    icon: "▦",
  },
  {
    title: "Đội ngũ kỹ thuật",
    description: "Hỗ trợ trao đổi thông tin và phối hợp theo nhu cầu thực tế.",
    icon: "◎",
  },
  {
    title: "Giải pháp phù hợp",
    description: "Đối chiếu yêu cầu kỹ thuật và điều kiện sử dụng của công trình.",
    icon: "◇",
  },
  {
    title: "Hợp tác lâu dài",
    description: "Hướng đến trao đổi rõ ràng và phối hợp hiệu quả với khách hàng.",
    icon: "↗",
  },
];

export default function DuAnPage() {
  const [activeFilter, setActiveFilter] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesCategory =
        activeFilter === "Tất cả" || project.category === activeFilter;
      const query = searchTerm.trim().toLocaleLowerCase("vi");
      const matchesSearch =
        !query ||
        `${project.title} ${project.category} ${project.location} ${project.description}`
          .toLocaleLowerCase("vi")
          .includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchTerm]);

  return (
    <main className="min-h-screen bg-white pb-16 text-slate-800 sm:pb-0">
      <Header />

      {/* HERO: editorial layout, not a full-screen background image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#FFF4E8] via-white to-[#FFF8F1]">
        <div className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#FFE3C5]/70 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-1/3 h-52 w-52 rounded-full bg-[#FFEBD8]/60 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 sm:py-16 lg:min-h-[470px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12 lg:px-8 lg:py-20">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-[#FF8B14]">
              <span className="h-px w-8 bg-[#FF8B14]" />
              Dự án & công trình
            </div>

            <h1 className="mt-6 max-w-xl text-4xl font-semibold leading-[1.12] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.65rem]">
              Dấu ấn công trình
              <br />
              qua từng <span className="text-[#FF8B14]">dự án</span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600">
              Khám phá các nhóm công trình tham khảo và định hướng ứng dụng
              thiết bị, giải pháp kỹ thuật cho lĩnh vực y tế, khách sạn, căn hộ,
              thương mại và công nghiệp.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#danh-sach-du-an"
                className="inline-flex items-center rounded-full bg-[#FF8B14] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#19202B]/15 transition hover:bg-[#19202B]"
              >
                Khám phá dự án <span className="ml-3">→</span>
              </a>
              <Link
                href="/lien-he"
                className="inline-flex items-center rounded-full border border-[#FCE1C4] bg-white/80 px-6 py-3.5 text-sm font-bold text-[#19202B] transition hover:border-[#F7A34D] hover:bg-[#FFF4E8]"
              >
                Liên hệ INTES
              </Link>
            </div>
          </div>

          {/* Collage gives the hero a different composition from other pages */}
          <div className="relative mx-auto h-[330px] w-full max-w-[620px] sm:h-[390px] lg:h-[420px]">
            <div className="absolute left-[19%] top-[5%] h-[84%] w-[61%] rounded-[42%_42%_28%_28%] bg-[#FCE8D6]" />
            <div className="absolute left-0 top-[27%] h-[44%] w-[39%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:rounded-3xl">
              <Image
                src="/projects/row-03-col-03-60.png"
                alt="Công trình y tế minh họa"
                fill
                unoptimized
                sizes="(max-width: 640px) 40vw, 240px"
                className="object-cover"
              />
            </div>
            <div className="absolute left-[29%] top-[2%] h-[75%] w-[43%] overflow-hidden rounded-2xl border-4 border-white shadow-2xl sm:rounded-3xl">
              <Image
                src="/projects/row-05-col-03-65.jpg"
                alt="Tòa nhà hiện đại minh họa"
                fill
                priority
                unoptimized
                sizes="(max-width: 640px) 45vw, 280px"
                className="object-cover"
              />
            </div>
            <div className="absolute right-0 top-[20%] h-[39%] w-[36%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:rounded-3xl">
              <Image
                src="/projects/row-06-col-03-02.jpg"
                alt="Không gian kỹ thuật công nghiệp minh họa"
                fill
                unoptimized
                sizes="(max-width: 640px) 36vw, 220px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[1%] right-[4%] h-[34%] w-[40%] overflow-hidden rounded-2xl border-4 border-white shadow-xl sm:rounded-3xl">
              <Image
                src="/projects/row-07-col-03-03.jpg"
                alt="Khu căn hộ hiện đại minh họa"
                fill
                unoptimized
                sizes="(max-width: 640px) 40vw, 250px"
                className="object-cover"
              />
            </div>
            <div className="absolute bottom-[8%] left-[3%] hidden items-center gap-3 rounded-2xl border border-[#FCE8D6] bg-white/95 px-4 py-3 shadow-lg sm:flex">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#FFF4E8] text-lg text-[#FF8B14]">✳</span>
              <span className="text-xs font-semibold leading-5 text-slate-700">
                Kết nối giải pháp
                <br />
                cho mọi công trình
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* QUICK POINTS */}
      <section className="border-y border-slate-100 bg-white">
        <div className="mx-auto grid max-w-7xl gap-6 px-5 py-7 sm:grid-cols-3 lg:px-8">
          {[
            ["01", "Đa dạng công trình", "Tham khảo nhiều nhóm công trình và lĩnh vực ứng dụng."],
            ["02", "Quan tâm kỹ thuật", "Đặt yêu cầu và thông số làm trọng tâm trao đổi."],
            ["03", "Kết nối nhu cầu", "Gửi thông tin công trình để trao đổi bước tiếp theo."],
          ].map(([number, title, description]) => (
            <div key={number} className="flex items-start gap-4">
              <span className="text-2xl font-semibold text-[#FF8B14]">{number}</span>
              <div>
                <h2 className="font-bold text-slate-900">{title}</h2>
                <p className="mt-1 text-sm leading-6 text-slate-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section
        id="danh-sach-du-an"
        className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:py-20 lg:px-8 lg:py-24"
      >
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8B14]">
              Dự án nổi bật
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Danh mục công trình tiêu biểu
            </h2>
            <p className="mt-4 leading-7 text-slate-500">
              Lọc theo nhóm công trình hoặc tìm theo tên để xem các mục tham khảo.
              Những dự án minh họa cần được thay bằng thông tin thực tế trước khi công bố.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#FF8B14] transition hover:text-[#19202B]"
          >
            Gửi yêu cầu dự án <span>→</span>
          </Link>
        </div>

        <div className="mt-8 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap gap-2" aria-label="Lọc dự án">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  aria-pressed={isActive}
                  className={`rounded-full border px-4 py-2.5 text-sm font-semibold transition ${
                    isActive
                      ? "border-[#FF8B14] bg-[#FF8B14] text-white"
                      : "border-slate-200 bg-white text-slate-600 hover:border-[#F7C18F] hover:text-[#FF8B14]"
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
          <label className="flex w-full items-center gap-3 rounded-full border border-slate-200 bg-white px-4 py-3 text-slate-500 focus-within:border-[#FF8B14] lg:max-w-xs">
            <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="10.8" cy="10.8" r="6.8" />
              <path d="m16 16 4.2 4.2" />
            </svg>
            <input
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value)}
              placeholder="Tìm kiếm dự án..."
              className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
              aria-label="Tìm kiếm dự án"
            />
          </label>
        </div>

        <div className="mt-7 flex items-center justify-between border-b border-slate-200 pb-4">
          <p className="text-sm text-slate-500">
            Nhóm đang xem: <span className="font-semibold text-slate-900">{activeFilter}</span>
          </p>
          <p className="text-sm font-semibold text-[#FF8B14]">{filteredProjects.length} mục</p>
        </div>

        {filteredProjects.length ? (
          <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group overflow-hidden rounded-xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#FCE1C4] hover:shadow-xl hover:shadow-[#19202B]/5"
              >
                <div className="relative h-52 overflow-hidden bg-[#FFF4E8] sm:h-56">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={`Hình ảnh ${"imageIsIllustration" in project && project.imageIsIllustration ? "minh họa cho" : "công trình"} ${project.title}`}
                      fill
                      unoptimized
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-[#FFF4E8] to-[#F5F6F8] text-[#19202B]/50">
                      <span className="text-4xl">▧</span>
                      <span className="mt-2 text-xs font-semibold uppercase tracking-widest">Chưa có hình ảnh</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                  <span className="absolute left-3 top-3 rounded-full border border-white/40 bg-[#FF8B14]/90 px-3 py-1.5 text-[10px] font-bold tracking-wide text-white backdrop-blur">
                    {project.category}
                  </span>
                  {"imageIsIllustration" in project && project.imageIsIllustration ? (
                    <span className="absolute bottom-3 right-3 rounded-full border border-white/50 bg-slate-950/65 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-white backdrop-blur">
                      Ảnh minh họa
                    </span>
                  ) : null}
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-2 text-xs text-slate-500">
                    <span className="text-[#FF8B14]">⌖</span>{project.location}
                  </p>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-slate-900">{project.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-500">{project.description}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                    <span className="text-xs font-medium text-slate-400">Hạng mục thực hiện</span>
                    <Link
                      href="/lien-he"
                      className="inline-flex items-center gap-2 text-sm font-bold text-[#FF8B14] transition hover:text-[#19202B]"
                      aria-label={`Liên hệ về ${project.title}`}
                    >
                      Trao đổi <span className="transition group-hover:translate-x-1">→</span>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-2xl border border-dashed border-slate-300 px-6 py-16 text-center">
            <h3 className="text-lg font-bold text-slate-900">Không tìm thấy dự án phù hợp</h3>
            <p className="mt-2 text-sm text-slate-500">Thử từ khóa khác hoặc chọn nhóm công trình khác.</p>
            <button
              type="button"
              onClick={() => {
                setActiveFilter("Tất cả");
                setSearchTerm("");
              }}
              className="mt-5 rounded-full bg-[#FF8B14] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#19202B]"
            >
              Xóa bộ lọc
            </button>
          </div>
        )}

        <p className="mt-5 text-xs leading-6 text-slate-400">
          Thông tin và hình ảnh được tổng hợp từ bảng Excel dự án do doanh nghiệp cung cấp. Các hạng mục hiển thị theo nội dung tài liệu nguồn.
        </p>
      </section>

      {/* PROCESS BAND */}
      <section className="bg-gradient-to-br from-[#FFF4E8] via-[#FFF8F1] to-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8B14]">Quy trình phối hợp</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Từ nhu cầu
              <br /> đến giải pháp
            </h2>
            <p className="mt-5 max-w-md leading-7 text-slate-600">
              Chúng tôi tiếp cận dự án theo quy trình rõ ràng, minh bạch và linh hoạt,
              nhằm đảm bảo đưa ra phương án phù hợp nhất với từng công trình.
            </p>
            <Link
              href="/giai-phap"
              className="mt-7 inline-flex items-center rounded-full bg-[#FF8B14] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#19202B]"
            >
              Tìm hiểu thêm <span className="ml-3">→</span>
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step) => (
              <article key={step.number} className="rounded-2xl border border-[#FCE8D6] bg-white/90 p-5 shadow-sm">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFF4E8] text-xl text-[#FF8B14]">{step.icon}</span>
                <p className="mt-5 text-xs font-bold tracking-[0.18em] text-[#FF8B14]">{step.number}</p>
                <h3 className="mt-2 font-bold text-slate-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-500">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY VIVAFIRE */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#FFF4E8] sm:min-h-[380px]">
            <Image
              src="/projects/row-30-col-03-28.jpg"
              alt="Kiến trúc công trình hiện đại minh họa"
              fill
              unoptimized
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#19202B]/55 via-[#19202B]/10 to-transparent" />
            <div className="absolute bottom-6 left-6 max-w-xs text-white sm:bottom-8 sm:left-8">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FCE8D6]">VIVAFIRE · Industrial Solutions</p>
              <p className="mt-3 text-2xl font-semibold leading-snug">Đồng hành cùng nhu cầu thực tế</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8B14]">Vì sao chọn VIVAFIRE</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Tập trung vào yêu cầu thực tế của từng công trình
            </h2>
            <p className="mt-5 leading-7 text-slate-600">
              Mỗi dự án có đặc điểm riêng về quy mô, môi trường vận hành, thông số và hồ sơ kỹ thuật.
              Việc xác định rõ nhu cầu là cơ sở để trao đổi sản phẩm và phương án phù hợp hơn.
            </p>
            <div className="mt-7 grid gap-5 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item.title} className="flex gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FFF4E8] text-lg text-[#FF8B14]">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-500">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-[#FFF4E8]">
        <div className="absolute inset-0">
          <Image
            src="/projects/row-62-col-03-56.png"
            alt=""
            fill
            unoptimized
            sizes="100vw"
            className="object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF4E8] via-white/95 to-white/80" />
        </div>
        <div className="relative mx-auto flex max-w-7xl flex-col gap-7 px-5 py-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#FF8B14]">Bắt đầu trao đổi</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
              Bạn đang chuẩn bị dự án mới?
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-slate-600">
              Chia sẻ loại công trình, nhu cầu thiết bị hoặc hồ sơ kỹ thuật để bắt đầu trao đổi cùng VIVAFIRE.
            </p>
          </div>
          <Link
            href="/lien-he"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-[#FF8B14] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#19202B]/15 transition hover:bg-[#19202B]"
          >
            Liên hệ ngay <span className="ml-3">→</span>
          </Link>
        </div>
      </section>

       {/* 07. FOOTER */}
      <footer className="bg-[#19202B] py-12 text-white sm:py-14">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.4fr] lg:gap-10">
            <div>
              <Link
                href="/"
                className="inline-flex items-center"
                aria-label="VIVAFIRE - Trang chủ"
              >
                <img
                  src="/images/vivafire/logo-vivafire.png"
                  alt="VIVAFIRE"
                  className="h-12 w-auto max-w-[230px] object-contain object-left"
                />
              </Link>

              <p className="mt-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#B9C0CA]">
                Giải pháp kỹ thuật PCCC
              </p>

              <p className="mt-4 max-w-[40ch] text-[15px] leading-6 text-[#B9C0CA]">
                Kỷ luật trong thực thi, năng lực trong kỹ thuật và chính trực
                trong từng cam kết.
              </p>
            </div>

            <div>
              <h3 className="mb-3.5 text-[15px] font-bold">Khám phá</h3>
              <ul className="grid gap-2.5 text-[15px] text-[#B9C0CA]">
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/san-pham">
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/giai-phap">
                    Giải pháp
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/dich-vu">
                    Dịch vụ
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/du-an">
                    Dự án
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3.5 text-[15px] font-bold">Về VIVAFIRE</h3>
              <ul className="grid gap-2.5 text-[15px] text-[#B9C0CA]">
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/gioi-thieu">
                    Giới thiệu công ty
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/tai-lieu">
                    Tài liệu kỹ thuật
                  </Link>
                </li>
                <li>
                  <Link className="transition hover:text-[#FF8B14]" href="/lien-he">
                    Liên hệ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="mb-3.5 text-[15px] font-bold">
                Thông tin liên hệ
              </h3>

              <ul className="grid gap-2.5 break-words break-words text-sm leading-6 text-[#B9C0CA]">
                <li>
                  <strong className="font-semibold text-white">
                    Công ty Cổ phần Dịch vụ Công nghệ VIVAFIRE
                  </strong>
                </li>
                <li>
                  Địa chỉ: 94 Lê Thị Ánh, Phường Đông Hưng Thuận, TP. Hồ Chí Minh
                </li>
                <li>
                  Tel:{" "}
                  <a
                    href="tel:02838832325"
                    className="transition hover:text-[#FF8B14]"
                  >
                    028.38832325
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href="mailto:commercial@vivafires.com"
                    className="transition hover:text-[#FF8B14]"
                  >
                    commercial@vivafires.com
                  </a>
                </li>
                <li>Website: www.vivafire.vn</li>
                <li>MST: 0316732553</li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-2 border-t border-white/10 pt-4 text-xs leading-5 text-[#B9C0CA]">
            <span>© 2026 VIVAFIRE. All rights reserved.</span>
            <span>
              
            </span>
          </div>
        </div>
      </footer>

      {/* MOBILE CONTACT BAR */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 border-t border-slate-200 bg-white p-2 shadow-[0_-4px_20px_rgba(15,23,42,0.08)] sm:hidden">
        <Link href="/san-pham" className="flex items-center justify-center rounded-full py-3 text-sm font-bold text-[#19202B]">
          Danh mục
        </Link>
        <Link href="/lien-he" className="flex items-center justify-center rounded-full bg-[#FF8B14] py-3 text-sm font-bold text-white">
          Yêu cầu báo giá
        </Link>
      </div>
    </main>
  );
}
