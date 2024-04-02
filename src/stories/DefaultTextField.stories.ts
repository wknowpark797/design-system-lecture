import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import DefaultTextField from '../components/DefaultTextField';

const meta = {
	title: 'TextFields/DefaultTextField',
	component: DefaultTextField,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

	argTypes: {
		value: { control: 'text', description: '텍스트 필드의 값', defaultValue: '' },
		placeholder: { control: 'text', description: '텍스트 필드의 placeholder', defaultValue: '텍스트를 입력해주세요' },
		iconAlt: { control: 'text', description: '아이콘 이미지의 alt 속성', defaultValue: 'icon' },
		iconPath: { control: 'text', description: '아이콘 이미지의 경로', defaultValue: '' },
		errorMessage: { control: 'text', description: '텍스트 필드의 에러 메세지' },
		isError: { control: 'boolean', description: '에러 상태 여부', defaultValue: false },
		onIconClick: { action: 'clicked', description: '버튼 클릭 이벤트' },
		onChange: { action: 'changed', description: '텍스트 필드 값 변경 이벤트' },
	},
	args: {
		onIconClick: fn(),
		onChange: fn(),
	},
} satisfies Meta<typeof DefaultTextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		value: '',
		placeholder: '텍스트를 입력해주세요',
		iconAlt: 'icon',
		iconPath: 'https://kr.object.ncloudstorage.com/icons/ic-delete-dark.svg',
		errorMessage: '텍스트를 확인해주세요',
		isError: false,
	},
};
