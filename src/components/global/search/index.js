import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style.scss';
import Modal from 'react-uikit-modal';
import FontAwesome from 'react-fontawesome';
import velocity from 'velocity-animate';
import Autosuggest from 'react-autosuggest';
import $ from 'jquery';
import { route } from 'preact-router';



const professions = [
   {
      "name":"Language Tutor"
   },
   {
      "name":"Language Practice"
   },
   {
      "name":"Exam Preparation"
   },
   {
      "name":"Science"
   },
   {
      "name":"Business Studies"
   },
   {
      "name":"Social Science"
   },
   {
      "name":"Drawing"
   },
   {
      "name":"Music"
   },
   {
      "name":"Dance"
   },
   {
      "name":"Interpreter"
   },
   {
      "name":"Negotiator/Mediator"
   },
   {
      "name":"Therapist"
   },
   {
      "name":"Listener"
   },
   {
      "name":"Speech Therapist"
   },
   {
      "name":"Fortune Teller"
   },
   {
      "name":"Astrologist"
   },
   {
      "name":"Personal Assistant"
   },
   {
      "name":"Career Coach"
   },
   {
      "name":"Architect"
   },
   {
      "name":"Interior Designer"
   },
   {
      "name":"Legal"
   },
   {
      "name":"Medical"
   },
   {
      "name":"Business"
   },
   {
      "name":"Family"
   },
   {
      "name":"Investment"
   },
   {
      "name":"Tech Support "
   },
   {
      "name":"Beautician"
   },
   {
      "name":"Personal Trainer"
   },
   {
      "name":"Yoga Instructor"
   },
   {
      "name":"Meditation Instructor"
   },
   {
      "name":"Dietologist"
   },
   {
      "name":"Fitness Professional"
   },
   {
      "name":"Spiritual Coach"
   }
]

// Teach Autosuggest how to calculate suggestions for any given input value.
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : professions.filter(profession =>
    profession.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
);



export default class Header extends Component {
	constructor(props){
		super(props);
		this.state = {
			showModal: false,
			searchValue: '',
			searchSuggestions: []
		}
		this.closeModal = this.closeModal.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
	}
	animateIn (modal, dialog) {
    this.setState({showModal: true});
    document.getElementById('searchInput').focus();
    document.getElementById('searchInput').setSelectionRange(0, this.state.searchValue.length)
    //velocity(modal,  {scale: 1}, {display: 'block'}, 20);
    //setTimeout(()=>{velocity(dialog, {scale: 1}, {display: 'block'}, 20)},200);
  }

	onSearchChange = (event, { newValue }) => {
    this.setState({
      searchValue: newValue
    });

  };
  componentWillReceiveProps(nextProps){
    if (nextProps.hiddenSearchBox) {
      this.setState({showModal: false})
    }
  }
  animateOut (modal, dialog) {
    this.setState({showModal: false});
		$(modal).remove();
    //velocity(modal,  {scale: 0.3}, { display: 'none' }, 20);
		//velocity(dialog, {scale: 0.95},{display: 'none'}, 20);
  }

	closeModal(){
		this.setState({showModal: false})
	}

  onSuggestionsFetchRequested = ({ value }) => {
	  this.setState({
	    searchSuggestions: getSuggestions(value)
	  });
  };

  // Autosuggest will call this function every time you need to clear suggestions.
  onSuggestionsClearRequested = () => {
    this.setState({
      searchSuggestions: []
    });
  }

  handleKeyPress =  (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.closeModal();
      route('/search/' + this.state.searchValue);
    }
  }
  performSearch(e){
    e.stopPropagation();
    this.closeModal();
    route('/search/' + this.state.searchValue);

  }

	render() {
		const inputProps = {
      placeholder: 'e.g. Architect',
      value: this.state.searchValue,
			className: 'uk-search-input',
      onChange: this.onSearchChange,
      onKeyPress: this.handleKeyPress,
			id: 'searchInput'
    };
		return (
			<div id={style.searchContainer} className=''>
				{this.state.showModal && (<a onClick={this.closeModal} className="uk-modal-close uk-close" id="closeModal"></a>)}
				<Modal
					id={style.searchModal}
		      close
		      show={this.state.showModal}
					className={this.state.showModal ? style.visible + ' uk-modal-full' : 'uk-modal-full'}
		      trigger={{
		        body: 'Find pro',
						animate: {
          		'in': (modal, dialog) => this.animateIn(modal, dialog),
          		out: (modal, dialog) => this.animateOut(modal, dialog)
        		}

		      }}
		    >
					 <form className="uk-search uk-search-large">
					 		<Autosuggest
				        suggestions={this.state.searchSuggestions}
				        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
				        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
				        getSuggestionValue={getSuggestionValue}
				        renderSuggestion={renderSuggestion}
				        inputProps={inputProps}
				      />
							<a href="#" className="withIcon" onClick={this.performSearch} >
								<FontAwesome name='search' />
							</a>

	         </form>
				</Modal>

			</div>
		);
	}
}
