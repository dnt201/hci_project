import {ReactElement} from 'react';
import Welcome1 from '../../icons/Welcome1';
import Welcome2 from '../../icons/Welcome2';
import Welcome3 from '../../icons/Welcome3';
import {IWelcome} from './type';

export const listWelcome: IWelcome[] = [
  {
    id: '1',
    title: 'Đặt món là giao',
    subTitle: 'Đặt món và giao nhanh chóng trên hàng trăm quán ăn gần bạn',
    Svg: Welcome1,
  },
  {
    id: '2',
    title: 'Đặt bàn là có',
    subTitle: 'Đặt bàn trước nhanh chóng và tiện lợi',
    Svg: Welcome2,
  },
  {
    id: '3',
    title: 'Chỉ cần vài chạm',
    subTitle: 'Thực hiện nhanh chóng với các thao tác đơn giản, thân thiện',
    Svg: Welcome3,
  },
];
