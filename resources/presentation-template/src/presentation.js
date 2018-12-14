import React from 'react';
import theme from './theme';
import {
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Heading,
  Image,
  Link,
  List,
  ListItem,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import {
  code_sample_1
} from './snippets';

require('./overrides.css');


export default class Presentation extends React.Component {
  render() {
    return (<React.Fragment>
      <Deck
        transition={['slide']}
        transitionDuration={150}
        theme={theme}
        progress="bar"
      >
        <Slide id="title">
          <Heading fit caps>⚛️ Title</Heading>
          <Text style={{textAlign: 'right'}}>
            Author Name
          </Text>
          <Text style={{textAlign: 'right'}}>
            Additional Info
          </Text>
        </Slide>
        <Slide id="evolution">
          <Heading caps size={4}>Bla Bla Bla<br/>Some more bla</Heading>
          <List>
            <ListItem>Bla Bla</ListItem>
            <ListItem>Bla Bla</ListItem>
            <ListItem>Bla Bla</ListItem>
            <ListItem>...</ListItem>
          </List>
        </Slide>
        <Slide id="react">
          <Heading caps size={4}>React is Awesome</Heading>
          <Image src="images/react-icon.png" />
        </Slide>
        <Slide id="string-refs">
          <Text caps textSize="0.7em">Code Sample 1</Text>
          <Heading caps size={4}>Title</Heading>
          <CodePane lang="js" theme="external" source={code_sample_1} />
        </Slide>
        <Slide id="links">
          <Heading caps size={4}>Links</Heading>
          <List>
            <ListItem><Link href="https://useful_link">Some Useful Link</Link></ListItem>
          </List>
        </Slide>
        <Slide id="thanks">
          <Heading caps>Thank you!<br/>Q&A</Heading>
        </Slide>
      </Deck>
    </React.Fragment>);
  }
}
