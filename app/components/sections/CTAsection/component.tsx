import Button from '../../ui/Button';
import Container from '../../ui/Container';
import Heading from '../../ui/Heading';
import Wrapper from '../../ui/Wrapper';
import { CTAsectionProps } from './index';

const CTSsection: React.FC<CTAsectionProps> = (props) => {
  return (
    <Wrapper element="section" padding variant="sectionBig">
      <Container variant="section">
        <div>
          <Heading
            title={props.title}
            accentText={props.accentText}
            accentPosition="left"
          />
          <p>{props.description}</p>

          <form>
            <input type="text"/>
            <input type="text"/>
            <input type="email"/>
            <textarea />
            <input type='checkbox' />
            <Button type="submit" title={props.buttonTitle}/>
          </form>
        </div>
      </Container>
    </Wrapper>
  );
};

export default CTSsection;
