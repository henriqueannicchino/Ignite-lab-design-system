import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, TextInputRootPros } from "./TextInput";

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args: {
        children: [
            <TextInput.Icon>
                <Envelope />
            </TextInput.Icon>,
            <TextInput.Input placeholder='Type your e-mail address' />
        ],
    },
    argTypes: {
        children: {
            table: {
                disable: true,
            }
        },
    }
} as Meta<TextInputRootPros>;

export const Default: StoryObj<TextInputRootPros> = {};

export const WithoutIcon: StoryObj<TextInputRootPros> = {
    args: {
        children: <TextInput.Input placeholder="Type your e-mail address" />
    }
};