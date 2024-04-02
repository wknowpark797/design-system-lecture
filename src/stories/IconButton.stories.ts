import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import IconButton from '../components/IconButton';

const meta = {
	title: 'Buttons/IconButton',
	component: IconButton,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

	argTypes: {
		alt: { control: 'text', description: '이미지의 alt 속성', defaultValue: 'icon' },
		iconPath: { control: 'text', description: '이미지의 경로', defaultValue: '' },
		onClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		alt: 'icon',
		iconPath: 'https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg',
	},
};

/**
 * [ 이미지 svg 경로 ]
 * 컨벤션 정하기
 *
 * 1. public 디렉토리
 *    iconPath: '/icons/img-name.svg',
 *
 * 2. src > assets (-> import 필수)
 *    import deleteIcon from '../assets/img-name.svg';
 *    iconPath: deleteIcon,
 */
