import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { changeChordFilter, toggleRootMatch } from 'app/redux/actions'

const ChordFilters = props => {
	const { checkBoxes, rootMatch, changeChordFilter, toggleRootMatch } = props

	const handleClick = ({ target: { value } }) => {
		changeChordFilter(value)
	}

	const handleTextClick = value => {
		changeChordFilter(value)
	}

	return (
		<div>
			<div className="onlyRoots">
				<span className="pointer" onClick={toggleRootMatch}>
					Only root matches
				</span>
				<input
					type="checkbox"
					name="rootMatch"
					value="rootMatch"
					checked={rootMatch}
					onChange={toggleRootMatch}
				/>
			</div>

			<div className="checkBoxes">
				<div>
					<span className="pointer" onClick={() => handleTextClick('basic')}>
						Basic
					</span>
					<input
						type="checkbox"
						name="chordType"
						value="basic"
						checked={checkBoxes.basic}
						onChange={handleClick}
					/>
				</div>
				<div>
					<span className="pointer" onClick={() => handleTextClick('common')}>
						Common
					</span>
					<input
						type="checkbox"
						name="chordType"
						value="common"
						checked={checkBoxes.common}
						onChange={handleClick}
					/>
				</div>
				<div>
					<span className="pointer" onClick={() => handleTextClick('uncommon')}>
						Uncommon
					</span>
					<input
						type="checkbox"
						name="chordType"
						value="uncommon"
						checked={checkBoxes.uncommon}
						onChange={handleClick}
					/>
				</div>
				<div>
					<span className="pointer" onClick={() => handleTextClick('rare')}>
						Rare
					</span>
					<input
						type="checkbox"
						name="chordType"
						value="rare"
						checked={checkBoxes.rare}
						onChange={handleClick}
					/>
				</div>
			</div>
		</div>
	)
}

ChordFilters.propTypes = {
	checkBoxes: PropTypes.object.isRequired,
	rootMatch: PropTypes.bool.isRequired,
	changeChordFilter: PropTypes.func.isRequired,
	toggleRootMatch: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
	checkBoxes: state.ui.checkBoxes,
	rootMatch: state.ui.rootMatch
})

const mapDispatchToProps = dispatch => ({
	changeChordFilter: value => dispatch(changeChordFilter(value)),
	toggleRootMatch: () => dispatch(toggleRootMatch())
})

export default connect(mapStateToProps, mapDispatchToProps)(ChordFilters)