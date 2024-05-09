// Home components

import React, { Component } from 'react';
import './hero.css'
import ReactDOM from 'react-dom';


interface CarouselProps {
    items: string[]; // 修改为字符串数组
    active: number;
}

interface CarouselState {
    items: string[]; // 修改为字符串数组
    active: number;
    direction: string;
}

interface ItemProps {
    image: string;
    level: number;
    onClickLeft?: () => void; // 可选的左侧项点击回调
    onClickRight?: () => void; // 可选的右侧项点击回调
}
  
  
class Carousel extends Component<CarouselProps, CarouselState> {
    constructor(props: CarouselProps) {
        super(props);
        this.state = {
            items: props.items,
            active: props.active,
            direction: '',
        };
    }

    generateItems() {
        const items: JSX.Element[] = [];
        for (let i = this.state.active - 1; i <= this.state.active + 1; i++) {
          let index = i;
          if (i < 0) {
            index = this.state.items.length + i;
          } else if (i >= this.state.items.length) {
            index = i % this.state.items.length;
          }
          const level = i - this.state.active;
          items.push(
           
            <Item
        key={index}
        image={this.state.items[index]}
        level={level}
        onClick={() => {/* Add your onClick logic here */}}
        onClickLeft={this.moveLeft.bind(this)}
        onClickRight={this.moveRight.bind(this)}
      />
          );
        }
        return items;
      }
      

    handleItemClick(level: number) {
        if (level < 0) {
            this.moveLeft();
        } else if (level > 0) {
            this.moveRight();
        }
    }

    moveLeft() {
        const newActive = this.state.active;
        this.setState({
            active: newActive < 0 ? this.state.items.length - 1 : newActive - 1,
            direction: 'left',
        });
    }

    moveRight() {
        const newActive = this.state.active;
        this.setState({
            active: (newActive + 1) % this.state.items.length,
            direction: 'right',
        });
    }

    render() {
        return (
            <div id="carousel" className="noselect">
                {this.generateItems()}
            </div>
        );
    }
}

interface ItemProps {
    image: string;
    level: number;
    onClick: (level: number) => void;
}

class Item extends Component<ItemProps> {
    render() {
        const className = `item level${this.props.level}`;
        const isLeftItem = this.props.level < 0;
        const isRightItem = this.props.level > 0;
    
        return (
            <div
                className={className}
                onClick={() => {
                  if (isLeftItem && this.props.onClickLeft) {
                    this.props.onClickLeft();
                  } else if (isRightItem && this.props.onClickRight) {
                    this.props.onClickRight();
                  }
                }}
            >
                <img src={this.props.image} alt={`Image`} />
            </div>
        );
    }
  }
  
  

const items = ['image1.jpg', 'image2.jpg', 'image3.jpg', 'image3.jpg', 'image3.jpg'];

export default function Hero() {
    return (
        <div className='Hero'>
            <div className='hero_container'>
                <div className='text_container'>
                    <div className='text_name_en'>UA CISD</div>
                    <div className='text_name_ch'>阿尔伯塔大学<br />中国留学生发展协会 </div>
                    <div className='text_about_paragraph'>致力于引领华人学生群体提供参与活动、
                    提高学术水平、提升职场竞争力、寻找就业机会，将学生群体引往学业上的辉煌、
                    事业上的成功，促进自我完善与融入社会。</div>
                </div>
                <div className='carousel_container'>
                    <Carousel items={items} active={0} />
                </div>
            </div>
        </div>
    )
}
