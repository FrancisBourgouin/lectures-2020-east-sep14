import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Header from '../Header'
import Footer from '../Footer'
import TaskList from '../TaskList'
import Task from '../Task'

storiesOf('Header', module)
  .add('Without a date', () => <Header />)
  .add('With a date', () => <Header time={new Date().toLocaleTimeString()} />)


storiesOf('Footer', module)
  .add('Default', () => <Footer />)


const listOfTasks = [
  { text: "Give a lecture", is_completed: false },
  { text: "Sing a song", is_completed: false },
  { text: "Do bad puns", is_completed: true },
  { text: "Talk about chickens", is_completed: true }
]

storiesOf('TaskList', module)
  .add('Empty List', () => <TaskList />)
  .add('Populated List', () => <TaskList tasks={listOfTasks} />)

storiesOf('Task', module)
  .add('Completed', () => <Task task={{ text: "Give a lecture", is_completed: true }} updateTask={action('update!')} />)
  .add('Not completed', () => <Task task={{ text: "Give a lecture", is_completed: false }} updateTask={action('update!')} />)


