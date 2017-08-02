namespace $.$mol {
	export class $mol_select extends $.$mol_select {
		
		@ $mol_mem()
		filter_pattern( next? : string ) {
			if( !this.focused() ) return ''
			
			return next || ''
		}
		
		@ $mol_mem()
		options_showed() {
			return this.focused() || this.filter_pattern().length > 0
		}
		
		@ $mol_mem()
		options() {
			return Object.keys( this.dictionary() )
		}
		
		options_filtered() {
			const filter = this.filter_pattern().toLowerCase()
			const value = this.value()
			
			return this.options().filter( id => this.option_label( id ).toLowerCase().match( filter ) )
		}
		
		option_label( id : string ) {
			const value = this.dictionary()[ id ]
			return value == null ? id : value
		}
		
		option_rows() {
			if( this.options_filtered().length === 0 ) return [ this.No_options() ]
			
			let options = this.options_filtered().map( ( option : string ) => this.Option_row( option ) )
			
			return options
		}
		
		@ $mol_mem()
		option_focused( component? : $mol_view ) {
			if( component === undefined ) {
				for( let comp of this.nav_components() ) {
					if( comp.focused() ) return comp
				}
				
				return this.Filter()
			}
			
			if( this.options_showed() ) {
				component.focused( true )
			}
			
			return component
		}

		event_select( id : string , event? : MouseEvent ) {
			this.value( id )
			this.focused( false )
		}
		
		nav_components() {
			return [ this.Filter() , ... this.option_rows() ]
		}
		
		anchor_content() {
			return [
				... ( this.options_showed() || !this.value() ) ? [ this.Filter() ] : this.option_content( this.value() ) ,
				this.Trigger() ,
			]
		}
		
	}
}
