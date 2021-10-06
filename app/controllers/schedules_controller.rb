class SchedulesController < ApplicationController
    
    def index
        appointments = Schedule.all
        render json: appointments, include: 'user'
    end

    def show
        appointment = Schedule.find(params[:id])
        render json: appointment, status: accepted
    end

    def create
        appointment = Schedule.create(schedule_params)
        render json: appointment, status: :created
    end

    def destroy
        appointment = Schedule.find(params[:id])
        appointment.destroy
        head :no_content
    end

    def update
        appointment = Schedule.find(params[:id])
        appointment.update!(schedule_params)
        render json: appointment, status: :accepted
    end

    private

    def find_currentuser
        user = User.find_by(id: session[:user_id])
    end

    def schedule_params
        params.permit(:name, :length, :shoot_description, :email, :consultation, :photographer_id, :artist_name, :client_id).merge(client_id: find_currentuser.id)
    end
end
