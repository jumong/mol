namespace $.$mol {
	
	export class $mol_app_studio_field extends $.$mol_app_studio_field {

		Title() {
			return this.title() ? super.Title() : null
		}

		controls() {
			const type = this.type()
			return [
				( type === 'bool' ) ? this.Bool() : null ,
				( type === 'number' ) ? this.Number() : null ,
				( type === 'string' ) ? this.String() : null ,
				( type === 'string' ) ? this.String() : null ,
				( type === 'locale' ) ? this.String() : null ,
				( type === 'object' ) ? this.Object() : null ,
				( type === 'get' ) ? this.Prop() : null ,
				( type === 'bind' ) ? this.Prop() : null ,
				( type === 'list' ) ? this.List() : null ,
			]
		}

		item_type( index : number , next? : string ) {
			//if( next != undefined ) //this.tree().sub[ index ].select( 'type' ).value = next
			return $mol_view_tree.prop_type( this.tree().sub[ index ] )
		}

		item_value( index : number , next? : string ) {
			//if( next != undefined ) this.tree().sub[ index ].select( 'default' ).value = next
			return this.tree().sub[ index ].sub[0].type || this.tree().sub[ index ].value
		}

		rows() {
			return this.tree().sub.map( ( item , index )=> this.Item( index ) )
		}

	}

}