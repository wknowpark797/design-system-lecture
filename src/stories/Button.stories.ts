import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '../components/Button';

// meta: Button 컴포넌트의 메타 정보
// Button 컴포넌트의 props를 정의
const meta = {
	title: 'Basic/Button', // 경로
	component: Button, // 스토리의 컴포넌트
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],

	argTypes: {
		primary: { control: 'boolean', description: '버튼의 타입' },
		backgroundColor: { control: 'color', description: '버튼의 배경컬러' },
	},
	args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		primary: true,
		label: 'Button',
	},
};
export const Secondary: Story = {
	args: {
		label: 'Button',
	},
};
export const Large: Story = {
	args: {
		size: 'large',
		label: 'Button',
	},
};
export const Small: Story = {
	args: {
		size: 'small',
		label: 'Button',
	},
};
