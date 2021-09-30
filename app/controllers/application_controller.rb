class ApplicationController < ActionController::API
    include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response  
rescue_from ActiveRecord::RecordNotFound, with: :render_record_not_found_response
wrap_parameters format:[]

   before_action :authorize 

    private  

      def render_unprocessable_entity_response(exeception)
        render json: { errors: exeception.record.errors.full_messages }, status: :unprocessable_entity 
      end

      def render_unprocessable_entity_response(exception)
        render json: { error: `#{exception.model} not found`}, status: :not_found   
      end

      
      def authorize
        return render json: { error: 'Not authorized' }, status: :unauthorized unless session.include? :user_id
      end
end
